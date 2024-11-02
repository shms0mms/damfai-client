"use client"

import React from "react"
import { Chapter } from "@/types/book"
import { ReadBookData } from "@/hooks/useReadBookData"
import CompressedFormat from "@/components/read-book/format/compressed"
import FullFormat from "@/components/read-book/format/default"

export type ReadBookPageProps = {
  params: {
    id: string
  }
  searchParams: {
    page?: string
    chapter?: string
    questions?: string
    format?: "compressed" | "full"
  }
  data: {
    currentChapter: Chapter
    currentPage: number // numberOfPage
    readBookData: ReadBookData
    readTime: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    timeString: string
    isLoading: boolean
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    error: Error | null
    navigation: {
      handleChapterChange: (value: string) => void
    }
  }
}

export default function ReadBookPage({
  params,
  searchParams
}: ReadBookPageProps) {
  const format = searchParams.format

  return (
    <>
      {format === "compressed" ? (
        <CompressedFormat params={params} searchParams={searchParams} />
      ) : (
        <FullFormat params={params} searchParams={searchParams} />
      )}
    </>
  )
}
