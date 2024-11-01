"use client"

import { ReadBook } from ".."
import { useReadBook } from "@/hooks/useReadBook"
import { ReadBookPageProps } from "@/app/(read-book)/books/read/[id]/page"

export default function FullFormat({
  params,
  searchParams
}: Omit<ReadBookPageProps, "data">) {
  const fullFormatData = useReadBook({
    params,
    searchParams
  })

  return (
    <ReadBook
      params={params}
      searchParams={searchParams}
      data={fullFormatData}
    />
  )
}
