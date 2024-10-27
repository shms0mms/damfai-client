"use client"

import { useMutation } from "@tanstack/react-query"
import { secondsToHours, secondsToMinutes } from "date-fns"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCheck, ChevronLeft, ChevronRight, CircleHelp } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useMediaQuery } from "usehooks-ts"
import { MEDIA } from "@/config/media.config"
import useCurrentChapter from "@/hooks/useCurrentChapter"
import useReadBookData from "@/hooks/useReadBookData"
import { Header } from "@/components/layouts/read-book/header"
import { Chappi } from "@/components/read-book/chappi"
import { Menu as MenuComponent } from "@/components/read-book/menu"
import { Questions } from "@/components/read-book/questions"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import { padStart } from "@/lib/utils"
import { analyticsService } from "@/services/analytics.service"
import { readBookService } from "@/services/read-book.service"

export type ReadBookPageProps = {
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
  const [currentPage, setCurrentPage] = useState(
    searchParams.page ? +searchParams.page : 1
  )

  const { data, refetch, isLoading } = useReadBookData({
    currentPage,
    params,
    searchParams
  })

  const currentChapter = useCurrentChapter(data, searchParams)
  const [currentChapterId, setCurrentChapterId] = useState(currentChapter?.id)

  useEffect(() => {
    if (data?.page?.id) {
      setCurrentPage(data?.page?.id)
    }
  }, [data?.page?.id])
  useEffect(() => {
    currentChapter?.id && setCurrentChapterId(currentChapter.id)
  }, [currentChapter])
  useEffect(() => void refetch(), [searchParams])
  const [open, setOpen] = useState(false)
  const [_, setKey] = useState(0)

  useEffect(() => {
    setKey(prevKey => prevKey + 1)
  }, [data?.page?.text])
  const questionsParam = searchParams.questions === "generate"
  const { push } = useRouter()
  const handlePrevPage = () => {
    const mapped = data?.chapters
      ?.slice(0, currentChapterId - 1)
      .map(c => c.pages)
    const prevPagesCount = mapped?.length ? mapped.reduce((c, a) => c + a)! : 0
    if (currentPage - prevPagesCount - 1 === 0) {
      const currentPage = data?.chapters
        ?.slice(0, currentChapterId - 1)
        .map(c => c.pages)
        .reduce((c, a) => c + a)!
      setCurrentChapterId(prev => prev - 1)
      push(
        `/books/read/${params?.id}?page=${currentPage}&chapter=${currentChapterId - 1}`
      )
      setCurrentPage(currentPage)
    } else {
      setCurrentPage(currentPage - 1)
      push(
        `/books/read/${params?.id}?page=${currentPage - 1}&chapter=${currentChapterId}`
      )
    }
  }
  const [readTime, setReadTime] = useState(0)
  useEffect(() => {
    setReadTime(0)

    const interval = setInterval(() => {
      setReadTime(prev => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [currentPage])

  const { mutate: finishPage } = useMutation({
    mutationFn: ({ page_id, book_id }: { page_id: number; book_id: number }) =>
      readBookService.readPage(page_id, book_id)
  })
  const { mutate: updateSpeedOfRead } = useMutation({
    mutationFn: (speed: number) =>
      analyticsService.update_speed_words_per_minute(speed)
  })
  const handleNextPage = () => {
    if (
      currentPage <
      data?.chapters
        .slice(0, currentChapterId)
        .map(c => c.pages)
        .reduce((p, c) => p + c)!
    ) {
      const page = currentPage + 1
      setCurrentPage(page)
      const minutes = secondsToMinutes(readTime) || 1
      const speed = data?.page?.text?.split(" ").length! / 30 / minutes

      updateSpeedOfRead(speed)

      const read_time = (+localStorage.getItem("read_time")! || 0) + readTime
      localStorage.setItem("read_time", read_time.toString())

      finishPage({
        book_id: +params.id,
        page_id: page
      })
      push(`/books/read/${params?.id}?page=${page}&chapter=${currentChapterId}`)
    } else if (currentChapterId < data?.chapters?.length!) {
      setCurrentChapterId(prev => prev + 1)
      setCurrentPage(currentPage + 1)

      push(
        `/books/read/${params?.id}?page=${currentPage + 1}&chapter=${currentChapterId + 1}`
      )
    }
  }

  const handleChapterChange = (value: string) => {
    setCurrentChapterId(parseInt(value))
    setCurrentPage(currentPage + 1)
    push(
      `/books/read/${params?.id}?page=${currentPage + 1}&chapter=${parseInt(value)}`
    )
  }
  const time = `${padStart(secondsToHours(readTime))}:${padStart(secondsToMinutes(readTime))}:${padStart(readTime > 59 ? readTime - 60 * secondsToMinutes(readTime) : readTime)}`
  const isMobile = useMediaQuery(MEDIA.md)

  // TODO: Questions answers - 2
  // DONE: Finish book page - 1
  // TODO: Zip text - 3
  useEffect(() => {
    if (currentChapterId && currentPage && data?.title) {
      localStorage.setItem(
        "last_read_book",
        JSON.stringify({
          title: data?.title,
          id: params.id,
          pageId: currentPage,
          chapterId: currentChapterId
        })
      )
    }
  }, [currentChapterId, currentPage])
  return (
    <>
      {questionsParam ? (
        <Dialog
          defaultOpen
          onOpenChange={() => {
            push(
              `/books/read/${params?.id}?page=${currentPage}&chapter=${currentChapterId}`
            )
          }}
        >
          <DialogContent>
            <DialogHeader>
              <h2 className="font-semibold">Викторина</h2>
            </DialogHeader>
            <Questions />
          </DialogContent>
        </Dialog>
      ) : null}

      {data && !isLoading ? (
        <div className="flex min-h-screen flex-col">
          <Header data={data} time={time} setOpen={setOpen} />
          <main className="flex flex-grow items-center justify-center p-4 pt-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentChapterId}-${currentPage}`}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="mx-auto w-full max-w-4xl rounded-lg bg-card py-6 shadow-lg max-md:max-w-7xl"
              >
                <h2 className="mb-4 text-2xl font-semibold">
                  {data?.chapters[currentChapterId - 1]?.title}
                </h2>
                <p
                  className="mb-6 text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: data?.page?.text?.replaceAll("\n", "<br />")!
                  }}
                />
                <p className="text-sm text-muted-foreground">
                  Страница {currentPage} из{" "}
                  {data?.chapters[currentChapterId - 1]?.pages}
                </p>
              </motion.div>
            </AnimatePresence>
          </main>

          <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-between border-t bg-background p-4">
            <Button
              onClick={handlePrevPage}
              disabled={currentChapterId === 1 && currentPage === 1}
              className="max-md:text-[0px]"
            >
              <ChevronLeft className="h-4 w-4 md:mr-2" /> Предыдущая
            </Button>
            <span className="text-sm">
              Глава {currentChapterId} / Страница {currentPage}
            </span>
            <div className="flex items-center gap-2">
              <Button
                onClick={handleNextPage}
                disabled={
                  currentChapterId === data?.chapters?.length &&
                  currentPage ===
                    data?.chapters?.map(c => c.pages).reduce((p, c) => p + c)!
                }
                className="max-md:text-[0px]"
              >
                Следующая <ChevronRight className="h-4 w-4 md:ml-2" />
              </Button>
              {currentChapterId === data?.chapters?.length &&
                currentPage ===
                  data?.chapters
                    ?.map(c => c.pages)
                    .reduce((p, c) => p + c)! && (
                  <>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Button
                            size={"icon"}
                            className="max-md:text-[0px]"
                            asChild
                          >
                            <Link
                              href={`/books/read/${params?.id}?page=${currentPage}&chapter=${currentChapterId}&questions=generate`}
                            >
                              {" "}
                              <CircleHelp className="2 h-4 w-4" />{" "}
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Сгенерировать вопросы</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Button
                            size={"icon"}
                            className="max-md:text-[0px]"
                            asChild
                          >
                            <Link href={`/books/read/${params?.id}/finish`}>
                              <CheckCheck size={16} />
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Заверишить книгу</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </>
                )}
            </div>
          </footer>
          <MenuComponent
            currentChapter={currentChapter}
            data={data}
            open={open}
            setOpen={setOpen}
            handleChapterChange={handleChapterChange}
          />

          <Chappi />
        </div>
      ) : null}
    </>
  )
}
