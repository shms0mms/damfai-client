"use client"

import { useQuery } from "@tanstack/react-query"
import { ChapterNavigation } from "@/components/read-book/chapter-navigation"
import { bookService } from "@/services/book.service"
import { type Pagination } from "@/types"

type ReadBookPageProps = {
  params: {
    id: string
  }
  searchParams: {
    page?: string
    chapter?: string
  }
}

export default function ReadBookPage({
  params,
  searchParams
}: ReadBookPageProps) {
  const { data, isLoading } = useQuery({
    initialData: undefined,
    queryKey: ["read-book", +params.id],
    queryFn: async () => {
      const chapters = await bookService.getAllChapters(+params.id)
      const pagesResponse = await bookService.getPagesByChapterId({
        chapterId: searchParams.chapter
          ? +searchParams.chapter
          : chapters[0].id,
        page: searchParams.page ? +searchParams.page : 1,
        size: 1
      })
      return {
        chapters,
        page: pagesResponse.items[0],
        pagination: pagesResponse as Pagination
      }
    }
  })

  console.log(data)

  return (
    <>
      <ChapterNavigation
        chapters={data?.chapters}
        isLoading={isLoading}
        currentChapterId={
          searchParams.chapter ? +searchParams.chapter : data?.chapters[0].id!
        }
      />
    </>
  )
}
