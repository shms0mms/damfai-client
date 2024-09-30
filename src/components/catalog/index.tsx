import { BooksFilters } from "./books-filters"

export const Catalog = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-[20rem_1fr]">
      <BooksFilters />
      <div></div>
    </div>
  )
}
