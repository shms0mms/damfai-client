import { useMutation } from "@tanstack/react-query"
import { secondsToMinutes } from "date-fns"
import { CheckCheck, ChevronLeft, ChevronRight, CircleHelp } from "lucide-react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import React, { FC } from "react"
import { Chapter } from "@/types/book"
import { ReadBookData } from "@/hooks/useReadBookData"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import { analyticsService } from "@/services/analytics.service"
import { readBookService } from "@/services/read-book.service"

type ReadBookNavigationProps = {
  currentChapter: Chapter
  currentPage: number
  readBookData: ReadBookData
  readTime: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export const ReadBookNavigation: FC<ReadBookNavigationProps> = ({
  currentChapter,
  currentPage,
  setCurrentPage,
  readBookData,
  readTime
}) => {
  const params = useParams<{ id: string }>()
  const router = useRouter()

  const { mutate: finishPage } = useMutation({
    mutationFn: ({ page_id, book_id }: { page_id: number; book_id: number }) =>
      readBookService.readPage(page_id, book_id)
  })
  const { mutate: updateSpeedOfRead } = useMutation({
    mutationFn: (speed: number) =>
      analyticsService.update_speed_words_per_minute(speed)
  })

  const handlePrevPage = () => {
    const mapped = readBookData?.chapters
      ?.slice(0, currentChapter.id - 1)
      .map(c => c.pages)
    const prevPagesCount = mapped?.length ? mapped.reduce((c, a) => c + a)! : 0
    if (currentPage - prevPagesCount - 1 === 0) {
      const currentPage = readBookData?.chapters
        ?.slice(0, currentChapter.id - 1)
        .map(c => c.pages)
        .reduce((c, a) => c + a)!
      router.push(
        `/books/read/${params?.id}?page=${currentPage}&chapter=${currentChapter.id - 1}`
      )
      setCurrentPage(currentPage)
    } else {
      setCurrentPage(currentPage - 1)
      router.push(
        `/books/read/${params?.id}?page=${currentPage - 1}&chapter=${currentChapter.id}`
      )
    }
  }
  const handleNextPage = () => {
    if (
      currentPage <
      readBookData?.chapters
        .slice(0, currentChapter.id)
        .map(c => c.pages)
        .reduce((p, c) => p + c)!
    ) {
      const page = currentPage + 1
      setCurrentPage(page)
      const minutes = secondsToMinutes(readTime) || 1
      const speed = readBookData?.page?.text?.split(" ").length! / 30 / minutes

      updateSpeedOfRead(speed)

      const read_time = (+localStorage.getItem("read_time")! || 0) + readTime
      localStorage.setItem("read_time", read_time.toString())

      finishPage({
        book_id: +params.id,
        page_id: page
      })
      router.push(
        `/books/read/${params?.id}?page=${page}&chapter=${currentChapter.id}`
      )
    } else if (currentChapter.id < readBookData?.chapters?.length!) {
      setCurrentPage(currentPage + 1)

      router.push(
        `/books/read/${params?.id}?page=${currentPage + 1}&chapter=${currentChapter.id + 1}`
      )
    }
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-between border-t bg-background p-4">
      <Button
        onClick={handlePrevPage}
        disabled={currentChapter.id === 1 && currentPage === 1}
        className="max-md:text-[0px]"
      >
        <ChevronLeft className="h-4 w-4 md:mr-2" /> Предыдущая
      </Button>
      <span className="text-sm">
        Глава {currentChapter.numberOfChapter} / Страница{" "}
        {readBookData?.page?.numberOfPage}
      </span>
      <div className="flex items-center gap-2">
        <Button
          onClick={handleNextPage}
          disabled={
            currentChapter.id === readBookData?.chapters?.length &&
            currentPage ===
              readBookData?.chapters?.map(c => c.pages).reduce((p, c) => p + c)!
          }
          className="max-md:text-[0px]"
        >
          Следующая <ChevronRight className="h-4 w-4 md:ml-2" />
        </Button>
        {currentChapter.id === readBookData?.chapters?.length &&
          currentPage ===
            readBookData?.chapters
              ?.map(c => c.pages)
              .reduce((p, c) => p + c)! && (
            <>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button size={"icon"} className="max-md:text-[0px]" asChild>
                      <Link
                        href={`/books/read/${params?.id}?page=${currentPage}&chapter=${currentChapter.id}&questions=generate`}
                      >
                        <CircleHelp className="2 h-4 w-4" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Сгенерировать вопросы</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button size={"icon"} className="max-md:text-[0px]" asChild>
                      <Link href={`/books/read/${params.id}/finish`}>
                        <CheckCheck size={16} />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Завершить книгу</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </>
          )}
      </div>
    </footer>
  )
}
