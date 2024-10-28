import { BooksPerYearGraph } from "../graphs/books-per-year-graph"
import { CardWrapper } from "./card-wrapper"

export function BooksPerYearCard() {
  return (
    <CardWrapper
      className="col-span-1"
      contentClassName="min-h-[380px] overflow-auto max-md:min-h-[380px] max-sm:min-h-[300px]"
      title="Стастистика чтения"
      subtitle="Книг за год"
    >
      <BooksPerYearGraph />
    </CardWrapper>
  )
}
