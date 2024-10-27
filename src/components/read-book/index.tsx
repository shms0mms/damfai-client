"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useAddMinutesPerDay } from "@/hooks/useAddMinutesPerDay"
import { useReadBook } from "@/hooks/useReadBook"
import { Header } from "@/components/layouts/read-book/header"
import { Chappi } from "@/components/read-book/chappi"
import { Menu } from "@/components/read-book/menu"
import { ReadBookNavigation } from "@/components/read-book/navigation"
import { Questions } from "@/components/read-book/questions"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { ReadBookPageProps } from "@/app/(read-book)/books/read/[id]/page"

// DONE: Questions answers - 2
// DONE: Finish book page - 1
// TODO: Zip text - 3
export function ReadBook({ params, searchParams }: ReadBookPageProps) {
  const router = useRouter()
  const {
    readBookData,
    timeString,
    isLoading,
    open,
    setOpen,
    navigation,
    ...navigationProps
  } = useReadBook({
    params,
    searchParams
  })
  const startGenerateQuestions = searchParams?.questions === "generate"

  useAddMinutesPerDay()

  const { push } = useRouter()
  return (
    <>
      {startGenerateQuestions ? (
        <Dialog
          defaultOpen
          onOpenChange={() => {
            router.push(
              `/books/read/${params?.id}?page=${navigationProps.currentPage}&chapter=${navigationProps.currentChapter.id}`
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
                key={`${navigationProps.currentChapter.id}-${navigationProps.currentPage}`}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="mx-auto w-full max-w-4xl rounded-lg bg-card py-6 shadow-lg max-md:max-w-7xl"
              >
                <h2 className="mb-4 text-2xl font-semibold">
                  {
                    readBookData?.chapters[
                      navigationProps.currentChapter.id - 1
                    ]?.title
                  }
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
                  Страница {navigationProps.currentPage} из{" "}
                  {
                    readBookData?.chapters[
                      navigationProps.currentChapter.id - 1
                    ]?.pages
                  }
                </p>
              </motion.div>
            </AnimatePresence>
          </main>

          <ReadBookNavigation
            {...navigationProps}
            readBookData={readBookData}
          />
          <Menu
            currentChapter={navigationProps.currentChapter}
            readBookData={readBookData}
            open={open}
            setOpen={setOpen}
            handleChapterChange={navigation.handleChapterChange}
          />

          <Chappi />
        </div>
      ) : null}
    </>
  )
}
