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
    }
  | undefined
const useReadBookData = ({
  searchParams,
  params,
  currentPage
}: ReadBookPageProps & Props) => {
  const response = useQuery({
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

export default useReadBookData
