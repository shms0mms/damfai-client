"use client"

import { secondsToHours, secondsToMinutes } from "date-fns"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useAddMinutesPerDay } from "@/hooks/useAddMinutesPerDay"
import { useCurrentChapter } from "@/hooks/useCurrentChapter"
import { useReadBookData } from "@/hooks/useReadBookData"
import { Header } from "@/components/layouts/read-book/header"
import { Chappi } from "@/components/read-book/chappi"
import { Menu as MenuComponent } from "@/components/read-book/menu"
import { ReadBookNavigation } from "@/components/read-book/navigation"
import { Questions } from "@/components/read-book/questions"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { ReadBookPageProps } from "@/app/(read-book)/books/read/[id]/page"
import { padStart } from "@/lib/utils"

export function ReadBook({ params, searchParams }: ReadBookPageProps) {
  const [currentPage, setCurrentPage] = useState(
    searchParams.page ? +searchParams.page : 1
  )

  const {
    data: readBookData,
    refetch,
    isLoading
  } = useReadBookData({
    currentPage,
    params,
    searchParams
  })

  const currentChapter = useCurrentChapter(readBookData, searchParams)

  const [open, setOpen] = useState(false)
  const [_, setKey] = useState(0)

  const questionsParam = searchParams.questions === "generate"
  const { push } = useRouter()
  const [readTime, setReadTime] = useState(0)

  const handleChapterChange = (value: string) => {
    setCurrentPage(currentPage + 1)
    push(
      `/books/read/${params?.id}?page=${currentPage + 1}&chapter=${parseInt(value)}`
    )
  }
  const time = `${padStart(secondsToHours(readTime))}:${padStart(secondsToMinutes(readTime))}:${padStart(readTime > 59 ? readTime - 60 * secondsToMinutes(readTime) : readTime)}`

  useEffect(() => {
    readBookData?.page?.id && setCurrentPage(readBookData.page.id)
  }, [readBookData?.page?.id])
  useEffect(() => void refetch(), [searchParams])
  useEffect(() => {
    setKey(prevKey => prevKey + 1)
  }, [readBookData?.page?.text])
  useEffect(() => {
    setReadTime(0)

    const interval = setInterval(() => {
      setReadTime(prev => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // TODO: Questions answers - 2 (MAX)
  // DONE: Finish book page - 1
  // TODO: Zip text - 3
  useEffect(() => {
    if (currentChapter?.id && currentPage && readBookData?.title) {
      localStorage.setItem(
        "last_read_book",
        JSON.stringify({
          title: readBookData?.title,
          id: params.id,
          pageId: currentPage,
          chapterId: currentChapter.id
        })
      )
    }
  }, [currentChapter?.id, currentPage])

  useAddMinutesPerDay()

  const navigationProps = {
    currentChapter,
    currentPage,
    readBookData: readBookData,
    readTime,
    setCurrentPage
  }
  return (
    <>
      {questionsParam ? (
        <Dialog
          defaultOpen
          onOpenChange={() => {
            push(
              `/books/read/${params?.id}?page=${currentPage}&chapter=${currentChapter.id}`
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

      {readBookData && !isLoading ? (
        <div className="flex min-h-screen flex-col">
          <Header readBookData={readBookData} time={time} setOpen={setOpen} />
          <main className="flex flex-grow items-center justify-center p-4 pt-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentChapter.id}-${currentPage}`}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="mx-auto w-full max-w-4xl rounded-lg bg-card py-6 shadow-lg max-md:max-w-7xl"
              >
                <h2 className="mb-4 text-2xl font-semibold">
                  {readBookData?.chapters[currentChapter.id - 1]?.title}
                </h2>
                <p
                  className="mb-6 text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: readBookData?.page?.text?.replaceAll(
                      "\n",
                      "<br />"
                    )!
                  }}
                />
                <p className="text-sm text-muted-foreground">
                  Страница {currentPage} из{" "}
                  {readBookData?.chapters[currentChapter.id - 1]?.pages}
                </p>
              </motion.div>
            </AnimatePresence>
          </main>

          <ReadBookNavigation {...navigationProps} />
          <MenuComponent
            currentChapter={currentChapter}
            readBookData={readBookData}
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
