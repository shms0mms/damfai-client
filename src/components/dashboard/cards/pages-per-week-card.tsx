import { PagesPerWeekGraph } from "../graphs/pages-per-week-graph"
import { CardWrapper } from "./card-wrapper"

export function PagesPerWeekCard() {
  return (
    <CardWrapper
      title="Стастистика чтения"
      className="col-span-1"
      subtitle="Страниц за неделю"
    >
      <PagesPerWeekGraph />
    </CardWrapper>
  )
}
