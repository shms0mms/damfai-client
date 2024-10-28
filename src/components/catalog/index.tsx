import { type FC } from "react"
import { Book } from "@/types/book"
import { Pagination } from "@/components/pagination"
import { Books } from "./books"
import { Pagination as TPagination } from "@/types"

type CatalogProps = {
  page: number
  size: number
  filters: Record<string, string>
}

export const Catalog: FC<CatalogProps> = async options => {
  const { items: books, ...pagination }: TPagination<Book> = {
    items: [],
    page: 1,
    pages: 1,
    size: 0,
    total: 0
  }
  return (
    <>
      <Books books={books} />
      <Pagination pagination={pagination} searchParams={options.filters} />
    </>
  )
}
