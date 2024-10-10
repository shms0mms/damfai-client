"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import useCurrentChapter from "@/hooks/useCurrentChapter"
import useReadBookData from "@/hooks/useReadBookData"
import { Header } from "@/components/layouts/read-book/header"
import { Modal } from "@/components/modal"
import { Chappi } from "@/components/read-book/chappi"
import { Menu as MenuComponent } from "@/components/read-book/menu"
import { Questions } from "@/components/read-book/questions"
import { Button } from "@/components/ui/button"

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
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    } else if (currentPage === 1) {
      setCurrentChapterId(prev => prev - 1)
      push(
        `/books/read/${params?.id}?page=${data?.chapters[currentChapterId - 2]?.pages!}&chapter=${currentChapterId - 1}`
      )
      setCurrentPage(data?.chapters[currentChapterId - 2]?.pages!)
    }
  }

  const handleNextPage = () => {
    if (currentPage < data?.chapters[currentChapterId - 1]?.pages!) {
      const page = currentPage + 1
      setCurrentPage(page)
      push(`/books/read/${params?.id}?page=${page}&chapter=${currentChapterId}`)
    } else if (currentChapterId < data?.chapters?.length!) {
      setCurrentChapterId(prev => prev + 1)
      setCurrentPage(1)
      push(
        `/books/read/${params?.id}?page=${1}&chapter=${currentChapterId + 1}`
      )
    }
  }

  const handleChapterChange = (value: string) => {
    setCurrentChapterId(parseInt(value))
    setCurrentPage(1)
    push(`/books/read/${params?.id}?page=${1}&chapter=${parseInt(value)}`)
  }

  return (
    <>
      {questionsParam ? (
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
        <div className="flex min-h-screen flex-col">
          <Header data={data} setOpen={setOpen} />
          <main className="flex flex-grow items-center justify-center p-4 pt-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentChapterId}-${currentPage}`}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="mx-auto w-full max-w-4xl rounded-lg bg-card p-6 shadow-lg"
              >
                <h2 className="mb-4 text-2xl font-semibold">
                  {data?.chapters[currentChapterId - 1]?.title}
                </h2>
                <p
                  className="mb-6 text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: data!.page!.text.replaceAll("\n", "<br />")
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
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Предыдущая
            </Button>
            <span className="text-sm">
              Глава {currentChapterId} / Страница {currentPage}
            </span>
            <Button
              onClick={handleNextPage}
              disabled={
                currentChapterId === data?.chapters?.length &&
                currentPage === data?.chapters[data?.chapters.length - 1]?.pages
              }
            >
              Следующая <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
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
