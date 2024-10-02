import { type FC } from "react"
import { BooksFilters } from "@/components/catalog/books-filters"
import { Books } from "./books"
import { BooksPagination } from "./books-pagination"
import { bookService } from "@/services/book.service"

type CatalogProps = {
  page: number
  size: number
  filters: Record<string, string>
}

export const Catalog: FC<CatalogProps> = async options => {
  const { items: books, ...pagination } = await bookService.getAll(options)
  return (
    <div className="grid grid-cols-1 items-start max-lg:gap-4 lg:grid-cols-[20rem_1fr] lg:gap-2">
      <BooksFilters />
      <div className="space-y-6 lg:px-4">
        <Books books={books} />
        <BooksPagination
          pagination={pagination}
          searchParams={options.filters}
        />
      </div>
    </div>
  )
}
