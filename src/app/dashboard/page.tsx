"use client"

import BooksPerMonthsGraph from "@/components/dashboard/books-per-months-graph"
import BooksPerYearGraph from "@/components/dashboard/books-per-year-graph"
import Books from "@/components/dashboard/books/books"
import ChartWrapper from "@/components/dashboard/chart-wrapper"
import MinutesPerWeekGraph from "@/components/dashboard/minutes-per-week-graph"
import PagesPerWeekGraph from "@/components/dashboard/pages-per-week-graph"
import Profile from "@/components/dashboard/profile"
import Statistics from "@/components/dashboard/statistics"
import { Header } from "@/components/layouts/root/header"

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="container mx-auto space-y-8 p-6">
        <div className="grid grid-cols-1 gap-y-4 xl:grid-cols-3 xl:gap-x-4">
          <Profile />
          <Statistics />
          <Books />
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
