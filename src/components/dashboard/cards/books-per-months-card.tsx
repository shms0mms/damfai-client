import { BooksPerMonthsGraph } from "../graphs/books-per-months-graph"
import { CardWrapper } from "./card-wrapper"

export function BooksPerMonthsCard() {
  return (
    <CardWrapper
      title="Стастистика чтения"
      className="col-span-1"
      subtitle="Книги прочитанные за месяц"
    >
      <BooksPerMonthsGraph />
    </CardWrapper>
  )
}
