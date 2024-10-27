"use client"

import { BookOpenIcon, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Callout } from "../ui/callout"

type LastReadBook = {
  title: string
  id: number
  pageId: number
  chapterId: number
}

export function Notify() {
  const [lastReadBook, setLastReadBook] = useState<LastReadBook | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Проверка, что мы находимся в браузере, и загрузка данных из localStorage
    const storedBook = window.localStorage.getItem("last_read_book")
    if (storedBook) {
      const parsedBook = JSON.parse(storedBook)
      setLastReadBook(parsedBook)
      setIsOpen(!!parsedBook.id)
    }
  }, [])

  return (
    <>
      {isOpen && lastReadBook && (
        <Callout
          title={
            <div>
              Вы не дочитали книгу{" "}
              <Link
                href={`/books/read/${lastReadBook.id}?page=${lastReadBook.pageId}&chapter=${lastReadBook.chapterId}`}
                className="border-b border-dashed border-foreground text-foreground"
              >
                {lastReadBook.title}
              </Link>
            </div>
          }
          className="flex h-auto w-full items-center justify-between gap-2 whitespace-normal border border-orange-300 px-4 py-3 text-orange-300"
          icon={<BookOpenIcon />}
        >
          <button
            type="button"
            onClick={() => {
              setIsOpen(false)
              localStorage.removeItem("last_read_book")
            }}
          >
            <X />
          </button>
        </Callout>
      )}
    </>
  )
}
