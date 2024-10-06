"use client"

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from "lucide-react"
import Link from "next/link"
import { useParams, useSearchParams } from "next/navigation"
import { Chapter } from "@/types/book"
import { Chappi } from "@/components/read-book/chappi"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type MenuBarProps = {
  pages: number
  currentPage: number
  chapters: Chapter[]
  currentChapterId: number
  open?: boolean
}

export function MenuBar(props: MenuBarProps) {
  const prevPage = props.currentPage > 1 ? props?.currentPage - 1 : undefined
  const nextPage =
    props.currentPage >= props.pages ? undefined : props.currentPage + 1

  const currentChapterIndex = props.chapters.findIndex(
    chapter => chapter.id === props.currentChapterId
  )

  const prevChapter = props.chapters[currentChapterIndex - 1]
  const nextChapter = props.chapters[currentChapterIndex + 1]
  const { id } = useParams()
  const searchParams = useSearchParams()
  const isQuestionsGenerate = searchParams?.get("questions") === "generate"
  return (
    <div className="pointer-events-none fixed bottom-20 left-0 z-[40] w-full translate-y-1/2">
      <div className="min-h-[120px] max-w-7xl py-2 2xl:container">
        <div className="flex flex-col items-start gap-1 max-2xl:hidden">
          <div className="flex w-full items-center justify-between gap-1">
            <div className="2xl:hidden">
              <Chappi open={props?.open} />
            </div>
          </div>
          {isQuestionsGenerate ? (
            <div className="flex w-full items-center justify-between gap-5">
              <Button
                variant={"outline"}
                className="pointer-events-auto"
                type="button"
                asChild
              >
                <Link
                  href={`/books/read/${id}?chapter=${props.currentChapterId}&page=${props.currentPage}`}
                >
                  Вернуться к чтению
                </Link>
              </Button>
              <Button className="pointer-events-auto" type="button" asChild>
                <Link href={`/books/read/${id}/finish`}>Завершить книгу</Link>
              </Button>
            </div>
          ) : (
            <div className="flex w-full flex-col gap-2">
              <div
                className={cn("flex", {
                  "justify-between": prevPage && nextPage,
                  "justify-end": !prevPage && nextPage
                })}
              >
                {prevPage ? (
                  <Button
                    className="pointer-events-auto flex items-center gap-2"
                    type="button"
                    variant={"outline"}
                    asChild
                  >
                    <Link
                      href={`?chapter=${props.currentChapterId}&page=${prevPage}`}
                    >
                      <ChevronLeft size={16} /> {prevPage}
                    </Link>
                  </Button>
                ) : null}
                {nextPage ? (
                  <Button
                    className="pointer-events-auto flex items-center gap-2"
                    type="button"
                    variant={"outline"}
                    asChild
                  >
                    <Link
                      href={`?chapter=${props.currentChapterId}&page=${nextPage}`}
                    >
                      {nextPage} <ChevronRight size={12} />
                    </Link>
                  </Button>
                ) : null}
              </div>
              <div
                className={cn("flex w-full", {
                  "justify-between": prevChapter && nextChapter,
                  "justify-end": !prevChapter && nextChapter
                })}
              >
                {prevChapter ? (
                  <Button
                    type="button"
                    className="pointer-events-auto flex items-center gap-2"
                    variant={"outline"}
                    asChild
                  >
                    <Link href={`?chapter=${prevChapter.id}&page=1`}>
                      <ChevronsLeft size={12} />
                      {prevChapter.title}
                    </Link>
                  </Button>
                ) : null}
                {nextChapter ? (
                  <Button
                    type="button"
                    className="pointer-events-auto flex items-center gap-2"
                    variant={"outline"}
                    asChild
                  >
                    <Link href={`?chapter=${nextChapter.id}&page=1`}>
                      {nextChapter.title}
                      <ChevronsRight size={16} />
                    </Link>
                  </Button>
                ) : (
                  <div className="flex w-full flex-col items-end gap-1">
                    <Button
                      className="pointer-events-auto"
                      type="button"
                      asChild
                    >
                      <Link href={`/books/read/${id}/finish`}>
                        Завершить книгу
                      </Link>
                    </Button>
                    <Button
                      className="pointer-events-auto"
                      variant={"outline"}
                      type="button"
                      asChild
                    >
                      <Link
                        href={`/books/read/${id}?chapter=${props.currentChapterId}&page=${props.currentPage}&questions=generate`}
                      >
                        Сгенерировать вопросы
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
