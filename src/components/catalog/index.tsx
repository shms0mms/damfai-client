import { type FC } from "react"
import { Book } from "@/types/book"
import { Pagination } from "@/components/pagination"
import { Books } from "./books"
import { recommendationsService } from "@/services/recommendations.service"
import { Pagination as TPagination } from "@/types"

type CatalogProps = {
  page: number
  size: number
  filters: Record<string, string>
}

export const Catalog: FC<CatalogProps> = async options => {
  const { items: books, ...pagination }: TPagination<Book> =
    await recommendationsService.searchBooks(options)

  return (
    <>
      <Books books={books} />
      <Pagination pagination={pagination} searchParams={options.filters} />
    </>
  )
}
