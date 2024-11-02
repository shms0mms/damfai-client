import { BalanceCard } from "@/components/dashboard/cards/balance-card"
import { BooksCard } from "@/components/dashboard/cards/books-card"
import { BooksPerMonthsCard } from "@/components/dashboard/cards/books-per-months-card"
import { BooksPerYearCard } from "@/components/dashboard/cards/books-per-year-card"
import { ChappiPassCard } from "@/components/dashboard/cards/chappi-pass-card"
import { CurrentQuestsCard } from "@/components/dashboard/cards/current-quests-card"
import { MinutesPerWeekCard } from "@/components/dashboard/cards/minutes-per-week-card"
import { PagesPerWeekCard } from "@/components/dashboard/cards/pages-per-week-card"
import { TablesCard } from "@/components/dashboard/cards/tables-card"
import { Notify } from "@/components/dashboard/notify"
import { Profile } from "@/components/dashboard/profile"
import { Statistics } from "@/components/dashboard/statistics"
import { Header } from "@/components/layouts/root/header"

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="container mx-auto space-y-8 p-6 pt-[calc(var(--header-size)+2rem)]">
        <Notify />
        <div className="grid grid-cols-1 gap-y-4 xl:grid-cols-3 xl:gap-x-4">
          <Profile />
          <Statistics />
          <BooksCard />
          <BooksPerYearCard />
          <PagesPerWeekCard />
          <BooksPerMonthsCard />
          <MinutesPerWeekCard />
          <BalanceCard />
          <ChappiPassCard />
          <TablesCard />
          <CurrentQuestsCard />
        </div>
      </div>
    </>
  )
}
