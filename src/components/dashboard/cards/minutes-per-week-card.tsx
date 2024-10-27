import { MinutesPerWeekGraph } from "../graphs/minutes-per-week-graph"
import { CardWrapper } from "./card-wrapper"

export function MinutesPerWeekCard() {
  return (
    <CardWrapper title="Стастистика чтения" subtitle="Минут за неделю">
      <MinutesPerWeekGraph />
    </CardWrapper>
  )
}
