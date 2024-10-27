"use client"

import { secondsToHours, secondsToMinutes } from "date-fns"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useCurrentChapter } from "./useCurrentChapter"
import { useReadBookData } from "./useReadBookData"
import { ReadBookPageProps } from "@/app/(read-book)/books/read/[id]/page"
import { padStart } from "@/lib/utils"

type Props = {} & ReadBookPageProps
export function useReadBook({ params, searchParams }: Props) {
  const [currentPage, setCurrentPage] = useState(
    searchParams.page ? +searchParams.page : 1
  )
  const {
    data: readBookData,
    refetch,
    isLoading
  } = useReadBookData({
    currentPage,
    params,
    searchParams
  })
  // For data fill hooks
  useEffect(() => {
    readBookData?.page?.id && setCurrentPage(readBookData.page.id)
  }, [readBookData?.page?.id])
  useEffect(() => void refetch(), [searchParams])
  useEffect(() => {
    setKey(prevKey => prevKey + 1)
  }, [readBookData?.page?.text])
  useEffect(() => {
    setReadTime(0)

    const interval = setInterval(() => {
      setReadTime(prev => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const { push } = useRouter()
  const currentChapter = useCurrentChapter(readBookData, searchParams)
  const [open, setOpen] = useState(false)
  const [_, setKey] = useState(0)

  const [readTime, setReadTime] = useState(0)
  const timeString = `${padStart(secondsToHours(readTime))}:${padStart(secondsToMinutes(readTime))}:${padStart(readTime > 59 ? readTime - 60 * secondsToMinutes(readTime) : readTime)}`

  const handleChapterChange = (value: string) => {
    setCurrentPage(currentPage + 1)
    push(
      `/books/read/${params?.id}?page=${currentPage + 1}&chapter=${parseInt(value)}`
    )
  }

  useEffect(() => {
    if (currentChapter?.id && currentPage && readBookData?.title) {
      localStorage.setItem(
        "last_read_book",
        JSON.stringify({
          title: readBookData?.title,
          id: params.id,
          pageId: currentPage,
          chapterId: currentChapter.id
        })
      )
    }
  }, [currentChapter?.id, currentPage])
  return {
    currentChapter,
    currentPage,
    readBookData: readBookData,
    readTime,
    setCurrentPage,
    timeString,
    isLoading,
    open,
    setOpen,
    navigation: {
      handleChapterChange
    }
  }
}
