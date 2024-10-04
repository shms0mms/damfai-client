import { type FC } from "react"
import { Pagination } from "@/components/pagination"
import { Books } from "./books"
import { bookService } from "@/services/book.service"

type CatalogProps = {
  page: number
  size: number
  filters: Record<string, string>
}

export const Catalog: FC<CatalogProps> = async options => {
  const { items: books, ...pagination } = await bookService.getAll(options)
  return (
    <>
      <Books books={books} />
      <Pagination pagination={pagination} searchParams={options.filters} />
    </>
  )
}
