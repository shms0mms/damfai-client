import { useQuery } from "@tanstack/react-query"
import { Chapter, Page } from "@/types/book"
import { ReadBookPageProps } from "@/app/(read-book)/books/read/[id]/page"
import { bookService } from "@/services/book.service"

type UseReadBookData = {
  currentPage: number
}
export type ReadBookData =
  | {
      title: string
      author: string
      chapters: Chapter[]
      page: Page | undefined
    }
  | undefined
export const useReadBookData = ({
  searchParams,
  params,
  currentPage
}: ReadBookPageProps & UseReadBookData) => {
  const response = useQuery({
    initialData: undefined,
    queryKey: ["read-book", +params.id],
    retry: false,
    queryFn: async () => {
      const chaptersResponse = await bookService.getAllChapters(+params.id)

      const currentChapter = chaptersResponse?.chapters.find(chapter => {
        return searchParams.chapter
          ? chapter.numberOfChapter === +searchParams.chapter
          : chapter.numberOfChapter === 1
      })!
      const pagesResponse = await bookService.getPagesByChapterId({
        chapterId: searchParams.chapter
          ? +searchParams.chapter
          : currentChapter.id,
        page: currentPage,
        size: 1,
        id_book: +params.id
      })

      const data = {
        title: chaptersResponse.title,
        author: chaptersResponse.author,
        chapters: chaptersResponse.chapters,
        page: pagesResponse
      } satisfies ReadBookData

      return data
    }
  })

  return response
}
