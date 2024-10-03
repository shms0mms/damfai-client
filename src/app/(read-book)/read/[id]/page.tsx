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
      const chaptersResponse = await bookService.getAllChapters(+params.id)
      const pagesResponse = await bookService.getPagesByChapterId({
        chapterId: searchParams.chapter
          ? +searchParams.chapter
          : chaptersResponse.chapters[0].id,
        page: searchParams.page ? +searchParams.page : 1,
        size: 1
      })
      console.log(pagesResponse)
      return {
        title: chaptersResponse.title,
        author: chaptersResponse.author,
        chapters: chaptersResponse.chapters,
        page: pagesResponse.items[0],
        pagination: pagesResponse as Pagination
      }
    }
  })

  const currentChapter = data?.chapters.find(
    chapter =>
      chapter.id ===
      (searchParams.chapter ? +searchParams.chapter : data?.chapters[0].id!)
  )

  return (
    <>
      {/* <ChapterNavigation
        chapters={data?.chapters}
        isLoading={isLoading}
        currentChapterId={
          searchParams.chapter ? +searchParams.chapter : data?.chapters[0].id!
        }
      /> */}
      {data && !isLoading ? (
        <div className="mx-auto max-w-5xl px-4 py-2 font-sans text-[1.075rem]">
          <h1>{data.title}</h1>
          <p>{data.author}</p>
          <h3 className="font-bold">{currentChapter?.title}</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: data.page.text.replaceAll("\n", "<br />")
            }}
          />
        </div>
      ) : null}
    </>
  )
}
