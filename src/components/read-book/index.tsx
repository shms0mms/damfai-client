"use client"

import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Header } from "@/components/layouts/read-book/header"
import { Chappi } from "@/components/read-book/chappi"
import { Menu } from "@/components/read-book/menu"
import { ReadBookNavigation } from "@/components/read-book/navigation"
import { Questions } from "@/components/read-book/questions"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { ReadBookPageProps } from "@/app/(read-book)/books/read/[id]/page"

// DONE: Questions answers - 2
// DONE: Finish book page - 1
// TODO: Zip text - 3
export function ReadBook({
  params,
  searchParams,
  data: {
    currentChapter,
    currentPage,
    readTime,
    setCurrentPage,
    isLoading,
    readBookData,
    error,
    open,
    setOpen,
    timeString,
    navigation
  }
}: ReadBookPageProps) {
  const startGenerateQuestions = searchParams?.questions === "generate"
  const router = useRouter()
  return error?.response?.status !== 403 ? (
    <>
      {startGenerateQuestions ? (
        <Dialog
          defaultOpen
          onOpenChange={() => {
            router.push(
              `/books/read/${params.id}?page=${currentPage}&chapter=${currentChapter.id}`
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
          <Header
            readBookData={readBookData}
            time={timeString}
            setOpen={setOpen}
          />
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
                  {readBookData.chapters[currentChapter.id - 1]?.title}
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
                  {readBookData.chapters[currentChapter.id - 1]?.pages}
                </p>
              </motion.div>
            </AnimatePresence>
          </main>

          <ReadBookNavigation
            readBookData={readBookData}
            currentChapter={currentChapter}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            readTime={readTime}
          />
          <Menu
            currentChapter={currentChapter}
            readBookData={readBookData}
            open={open}
            setOpen={setOpen}
            handleChapterChange={navigation.handleChapterChange}
          />

          <Chappi />
        </div>
      ) : null}
    </>
  ) : (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <h1 className="text-7xl font-semibold text-foreground/70">403</h1>
      <p className="max-w-[20rem] text-center text-muted-foreground">
        Начните читать данную книгу, для получения доступа к данной странице по
        кнопке ниже
      </p>
      <Button type="button" asChild>
        <Link href={`/books/${params.id}`}>Перейти к чтению книги</Link>
      </Button>
    </div>
  )
}
