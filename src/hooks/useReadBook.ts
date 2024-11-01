"use client"

import { secondsToHours, secondsToMinutes } from "date-fns"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useCurrentChapter } from "./useCurrentChapter"
import { useReadBookData } from "./useReadBookData"
import { type ReadBookPageProps } from "@/app/(read-book)/books/read/[id]/page"
import { padStart } from "@/lib/utils"

export function useReadBook({ params, searchParams }: ReadBookPageProps) {
  const router = useRouter()
  const [readTime, setReadTime] = useState(0)
  const [open, setOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(
    searchParams.page ? +searchParams.page : 1
  )

  const {
    data: readBookData,
    refetch,
    isLoading,
    error
  } = useReadBookData({
    currentPage,
    params,
    searchParams
  })

  const currentChapter = useCurrentChapter(readBookData, searchParams)

  const timeString = `${padStart(secondsToHours(readTime))}:${padStart(secondsToMinutes(readTime))}:${padStart(readTime > 59 ? readTime - 60 * secondsToMinutes(readTime) : readTime)}`

  const handleChapterChange = (value: string) => {
    setCurrentPage(currentPage)
    router.push(
      `/books/read/${params?.id}?page=${currentPage}&chapter=${parseInt(value)}`
    )
  }

  // For data fill hooks
  useEffect(() => {
    readBookData?.page?.id && setCurrentPage(readBookData.page.numberOfPage)
  }, [readBookData?.page?.id])
  useEffect(() => void refetch(), [searchParams])
  useEffect(() => {
    setReadTime(0)

    const interval = setInterval(() => {
      setReadTime(prev => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [currentPage, currentChapter?.id])

  useEffect(() => {
    if (currentChapter?.id && currentPage && readBookData?.title) {
      localStorage.setItem(
        "lastReadBook",
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
    error,
    navigation: {
      handleChapterChange
    }
  }
}
