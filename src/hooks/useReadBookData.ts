import { useQuery } from "@tanstack/react-query"
import { Chapter, Page } from "@/types/book"
import { ReadBookPageProps } from "@/app/(read-book)/books/read/[id]/page"
import { bookService } from "@/services/book.service"
import { Pagination } from "@/types"

type Props = {
  currentPage: number
}
export type ReadBookData =
  | {
      title: string
      author: string
      chapters: Chapter[]
      page: Page | undefined
      pagination: Pagination
      totalPages: number
    }
  | undefined
const useReadBookData = ({
  searchParams,
  params,
  currentPage
}: ReadBookPageProps & Props) => {
  return useQuery({
    initialData: undefined,
    queryKey: ["read-book", +params.id],
    queryFn: async () => {
      const chaptersResponse = await bookService.getAllChapters(+params.id)
      const pagesResponse = await bookService.getPagesByChapterId({
        chapterId: searchParams.chapter
          ? +searchParams.chapter
          : chaptersResponse.chapters[0]!.id,
        page: currentPage,
        size: 1
      })
      return {
        title: chaptersResponse.title,
        author: chaptersResponse.author,
        chapters: chaptersResponse.chapters,
        page: pagesResponse.items[0],
        pagination: pagesResponse as Pagination,
        totalPages: pagesResponse.pages
      } satisfies ReadBookData
    }
  })
}

export default useReadBookData
