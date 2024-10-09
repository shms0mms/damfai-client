import {BooksDashboard} from "@/components/dashboard/books"
import {BooksPerMonthsGraph} from "@/components/dashboard/graphs/books-per-months-graph"
import {BooksPerYearGraph} from "@/components/dashboard/graphs/books-per-year-graph"
import {ChartWrapper} from "@/components/dashboard/graphs/chart-wrapper"
import {MinutesPerWeekGraph} from "@/components/dashboard/graphs/minutes-per-week-graph"
import {PagesPerWeekGraph} from "@/components/dashboard/graphs/pages-per-week-graph"
import { Notify } from "@/components/dashboard/notify"
import {Profile} from "@/components/dashboard/profile"
import {Statistics} from "@/components/dashboard/statistics"
import { Header } from "@/components/layouts/root/header"

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="container mx-auto space-y-8 p-6">
        <Notify />
        <div className="grid grid-cols-1 gap-y-4 xl:grid-cols-3 xl:gap-x-4">
          <Profile />
          <Statistics />
          <BooksDashboard />
          <ChartWrapper
            className="col-span-1 max-md:min-h-[380px]"
            title="Стастистика чтения"
            subtitle="Книг за год"
          >
            <BooksPerYearGraph />
          </ChartWrapper>
          <ChartWrapper
            title="Стастистика чтения"
            className="col-span-1"
            subtitle="Страниц за неделю"
          >
            <PagesPerWeekGraph />
          </ChartWrapper>
          <ChartWrapper
            title="Стастистика чтения"
            className="col-span-1"
            subtitle="Книги прочитанные за месяц"
          >
            <BooksPerMonthsGraph />
          </ChartWrapper>
          <ChartWrapper title="Стастистика чтения" subtitle="Минут за неделю">
            <MinutesPerWeekGraph />
          </ChartWrapper>
        </div>
      </div>
    </>
  )
}
