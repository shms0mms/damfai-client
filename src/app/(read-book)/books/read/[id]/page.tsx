"use client"

import { useQuery } from "@tanstack/react-query"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useMediaQuery } from "usehooks-ts"
import { MEDIA } from "@/config/media.config"
import { MenuBar, MenuBarProps } from "@/components/layouts/read-book/menu-bar"
import { MenuBarMobile } from "@/components/layouts/read-book/menu-bar-mobile"
import { SideBar } from "@/components/layouts/read-book/sidebar"
import { Modal } from "@/components/modal"
import {Questions} from "@/components/read-book/questions"
import {SelectionMenu} from "@/components/ui/selection-popup"
import { bookService } from "@/services/book.service"
import { type Pagination } from "@/types"

type ReadBookPageProps = {
  params: {
    id: string
  }
  searchParams: {
    page?: string
    chapter?: string
    questions?: string
  }
}

export default function ReadBookPage({
  params,
  searchParams
}: ReadBookPageProps) {
  const currentPage = searchParams.page ? +searchParams.page : 1
  const { data, isLoading, refetch } = useQuery({
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
  useEffect(() => void refetch(), [searchParams])
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
  const [open, setOpen] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    setKey(prevKey => prevKey + 1)
  }, [data?.page?.text])
  const isExistsQuestionsInParams = searchParams.questions === "generate"
  return (
    <>
      {data && !isLoading ? (
        <>
          {!isMobile ? (
            <MenuBar open={open} {...menuBarProps!} />
          ) : (
            <MenuBarMobile open={open} {...menuBarProps!} {...currentChapter} />
          )}
        </>
      ) : null}

      {isExistsQuestionsInParams ? (
        <Modal
          title="Викторина"
          classNames={{
            content: "mt-4"
          }}
        >
          <Questions />
        </Modal>
      ) : null}

      {data && !isLoading ? (
        <main className="flex h-full w-full gap-5">
          {!isExistsQuestionsInParams && (
            <SideBar
              pages={data?.pagination?.pages!}
              book_id={params?.id}
              currentChapterId={searchParams!.chapter!}
            />
          )}
          <div className="mx-auto h-full w-full max-w-5xl px-4 py-2 font-sans text-[1.075rem]">
            <div className="flex h-full w-full flex-col gap-5">
              {" "}
              <div className="flex flex-col gap-1">
                <h2 className="text-xl">{data.title}</h2>
                <p>{data.author}</p>
              </div>
              <div className="relative flex h-full w-full flex-col gap-4 pb-[100px]">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center font-bold"
                >
                  {currentChapter?.title}
                </motion.h1>
                <motion.p
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  dangerouslySetInnerHTML={{
                    __html: data!.page!.text.replaceAll("\n", "<br />")
                  }}
                />

                <SelectionMenu
                  onAsk={() => setOpen(true)}
                  onSpeak={text => {}}
                  disabled={isExistsQuestionsInParams}
                />
              </div>
            </div>
          </div>
        </main>
      ) : null}
    </>
  )
}
