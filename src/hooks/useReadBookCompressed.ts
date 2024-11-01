import { useEffect, useState } from "react"
import { useCompressedBook } from "./useCompressedBook"
import { useReadBookData } from "./useReadBookData"
import { ReadBookPageProps } from "@/app/(read-book)/books/read/[id]/page"

export function useReadBookCompressed({
  params,
  searchParams
}: Omit<ReadBookPageProps, "data">) {
  const [text, setText] = useState<string | undefined>(undefined)
  const { message } = useCompressedBook(+params.id)
  const [open, setOpen] = useState(false)
  const query = useReadBookData({
    currentPage: 1,
    params,
    searchParams
  })
  useEffect(() => {
    if (message?.text) setText(message.text)
  }, [message])

  return { text, setText, query, open, setOpen }
}
