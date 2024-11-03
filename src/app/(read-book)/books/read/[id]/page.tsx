"use client"

import React from "react"
import { ReadBook } from "@/components/read-book"
import CompressedFormat from "@/components/read-book/format/compressed"

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
        <ReadBook params={params} searchParams={searchParams} />
      )}
    </>
  )
}
