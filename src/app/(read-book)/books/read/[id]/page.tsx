"use client"

import { useQuery } from "@tanstack/react-query"
<<<<<<< HEAD
import SelectionMenu from "@/components/ui/selection-popup"
import TextReveal from "@/components/ui/text-reveal"
=======
>>>>>>> 785851ba19ccc7cf5ef343e749e0bcc8df974f90
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
  const { data, isLoading } = useQuery({
    initialData: undefined,
    queryKey: ["read-book", +params.id],
    queryFn: async () => {
      const chaptersResponse = await bookService.getAllChapters(+params.id)
      const pagesResponse = await bookService.getPagesByChapterId({
        chapterId: searchParams.chapter
          ? +searchParams.chapter
          : chaptersResponse.chapters[0].id,
        page: searchParams.page ? +searchParams.page : 1,
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

  const currentChapter = data?.chapters.find(
    chapter =>
      chapter.id ===
      (searchParams.chapter ? +searchParams.chapter : data?.chapters[0].id!)
  )

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
<<<<<<< HEAD
        <div className="mx-auto flex max-w-5xl flex-col gap-5 px-4 py-2 font-sans text-[1.075rem]">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl">{data.title}</h2>
            <p>{data.author}</p>
          </div>
          <h1 className="text-center font-bold">{currentChapter?.title}</h1>
          <div className="relative pb-[100px]">
            <p
              dangerouslySetInnerHTML={{
                __html: data.page.text.replaceAll("\n", "<br />")
              }}
            />

            <SelectionMenu />
          </div>
=======
        <div className="mx-auto max-w-5xl px-4 py-2 font-sans text-[1.075rem]">
          <h1>{data.title}</h1>
          <p>{data.author}</p>
          <h3 className="font-bold">{currentChapter?.title}</h3>
          {data.page?.text.split("\n").map(paragraph => (
            <>
              <br />
              <p>{paragraph}</p>
              {/* <SelectionMenu> */}
              {/* <SelectionMenuTrigger>{paragraph}</SelectionMenuTrigger> */}
              {/* <SelectionMenuContent>
                  <SelectionMenuItem onSelect={a => console.log(true)}>
                    asdasd
                  </SelectionMenuItem>
                </SelectionMenuContent> */}
              {/* </SelectionMenu> */}
            </>
          ))}
>>>>>>> 785851ba19ccc7cf5ef343e749e0bcc8df974f90
        </div>
      ) : null}
    </>
  )
}

{
  /* <p
  dangerouslySetInnerHTML={{
    __html: data.page.text.replaceAll("\n", "<br />")
  }}
/> */
}
