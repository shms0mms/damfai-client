"use client"

import { useQuery } from "@tanstack/react-query"
import { useMediaQuery } from "usehooks-ts"
import { MEDIA } from "@/config/media.config"
import { MenuBar, MenuBarProps } from "@/components/layouts/read-book/menu-bar"
import { MenuBarMobile } from "@/components/layouts/read-book/menu-bar-mobile"
import SelectionMenu from "@/components/ui/selection-popup"
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
  const currentPage = searchParams.page ? +searchParams.page : 1
  const { data, isLoading } = useQuery({
    initialData: undefined,
    queryKey: ["read-book", +params.id],
    queryFn: async () => {
      const chaptersResponse = await bookService.getAllChapters(+params.id)
      const pagesResponse = await bookService.getPagesByChapterId({
        chapterId: searchParams.chapter
          ? +searchParams.chapter
          : chaptersResponse.chapters[0]!.id,
        page: currentPage,
        size: 1
      })
      return {
        title: chaptersResponse.title,
        author: chaptersResponse.author,
        chapters: chaptersResponse.chapters,
        page: pagesResponse.items[0],
        pagination: pagesResponse as Pagination
      }
    }
  })
  const isMobile = useMediaQuery(MEDIA.md)

  const currentChapter = data?.chapters.find(
    chapter =>
      chapter.id ===
      (searchParams.chapter ? +searchParams.chapter : data?.chapters[0]?.id)
  )!

  const menuBarProps: MenuBarProps | undefined = data
    ? {
        chapters: data.chapters,
        currentChapterId: currentChapter?.id,
        currentPage: data.pagination.page,
        pages: data.pagination.pages
      }
    : undefined

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
        <>
          {!isMobile ? (
            <MenuBar {...menuBarProps!} />
          ) : (
            <MenuBarMobile {...menuBarProps!} currentChapter={currentChapter} />
          )}
        </>
      ) : null}
      {data && !isLoading ? (
        <main className="mx-auto flex max-w-5xl flex-col gap-5 px-4 py-2 font-sans text-[1.075rem]">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl">{data.title}</h2>
            <p>{data.author}</p>
          </div>
          <h1 className="text-center font-bold">{currentChapter?.title}</h1>
          <div className="relative pb-[100px]">
            <p
              dangerouslySetInnerHTML={{
                __html: data!.page!.text.replaceAll("\n", "<br />")
              }}
            />

            <SelectionMenu />
          </div>
        </main>
      ) : null}
    </>
  )
}
