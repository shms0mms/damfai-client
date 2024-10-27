import { BooksPerYearGraph } from "../graphs/books-per-year-graph"
import { CardWrapper } from "./card-wrapper"

export function BooksPerYearCard() {
  return (
    <CardWrapper
      className="col-span-1 max-md:min-h-[380px]"
      title="Стастистика чтения"
      subtitle="Книг за год"
    >
      <BooksPerYearGraph />
    </CardWrapper>
  )
}
