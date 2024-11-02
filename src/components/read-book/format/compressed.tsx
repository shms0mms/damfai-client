"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useReadBookCompressed } from "@/hooks/useReadBookCompressed"
import { ReadBookData } from "@/hooks/useReadBookData"
import { Header } from "@/components/layouts/read-book/header"
import { SummarizeLoadingState } from "@/components/prettify/summarized-text"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Chappi } from "../chappi"
import { Menu } from "../menu"
import { Questions } from "../questions"
import { ReadBookPageProps } from "@/app/(read-book)/books/read/[id]/page"

export default function CompressedFormat({
  params,
  searchParams
}: Omit<ReadBookPageProps, "data">) {
  const { text, query, setOpen, open } = useReadBookCompressed({
    params,
    searchParams
  })
  const startGenerateQuestions = searchParams?.questions === "generate"
  const router = useRouter()

  const readBookData = {
    author: query.data?.author!,
    chapters: query.data?.chapters!,
    title: query.data?.title!,
    page: undefined
  } satisfies ReadBookData

  return (
    <>
      {query?.error?.response?.status !== 403 ? (
        <>
          {startGenerateQuestions ? (
            <Dialog
              defaultOpen
              onOpenChange={() => {
                router.push(`/books/read/${+params.id}?format=compressed`)
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
          <Header readBookData={readBookData} setOpen={setOpen} />
          <main className="pt-24">
            <div className="container max-w-4xl max-md:max-w-7xl">
              {text ? (
                <p
                  className="mb-6 text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: text?.replaceAll("\n", "<br />")!
                  }}
                />
              ) : (
                <div className="flex h-screen w-screen items-center justify-center">
                  <SummarizeLoadingState />
                </div>
              )}
            </div>
          </main>
          <Menu readBookData={readBookData} open={open} setOpen={setOpen} />

          <Chappi className="bottom-10" />
        </>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-5">
          <h1 className="text-7xl font-semibold text-foreground/70">403</h1>
          <p className="max-w-[20rem] text-center text-muted-foreground">
            Начните читать данную книгу, для получения доступа к данной странице
            по кнопке ниже
          </p>
          <Button type="button" asChild>
            <Link href={`/books/${params.id}`}>Перейти к чтению книги</Link>
          </Button>
        </div>
      )}
    </>
  )
}
