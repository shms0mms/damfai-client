"use client"

import { useQuery } from "@tanstack/react-query"
import { AchievementsCard } from "@/components/dashboard/achievements-card"
import { BalanceCard } from "@/components/dashboard/balance-card"
import { BooksDashboard } from "@/components/dashboard/books"
import { CardWrapper } from "@/components/dashboard/card-wrapper"
import { ChappiPassCard } from "@/components/dashboard/chappi-pass-card"
import { BooksPerMonthsGraph } from "@/components/dashboard/graphs/books-per-months-graph"
import { BooksPerYearGraph } from "@/components/dashboard/graphs/books-per-year-graph"
import { MinutesPerWeekGraph } from "@/components/dashboard/graphs/minutes-per-week-graph"
import { PagesPerWeekGraph } from "@/components/dashboard/graphs/pages-per-week-graph"
import { Notify } from "@/components/dashboard/notify"
import { Profile } from "@/components/dashboard/profile"
import { Statistics } from "@/components/dashboard/statistics"
import { TableCard } from "@/components/dashboard/table-card"
import { Header } from "@/components/layouts/root/header"
import { extensionsService } from "@/services/extensions.service"
import { themeService } from "@/services/themes.service"

export default function Dashboard() {
  const {
    data: extensions,
    isLoading: isExtensionLoading,
    refetch: refetchExtensions
  } = useQuery({
    queryKey: ["/extensions/user"],
    queryFn: () => extensionsService.getUserExtensions()
  })
  const {
    data: themes,
    isLoading: isThemeLoading,
    refetch: refetchThemes
  } = useQuery({
    queryKey: ["/themes/user"],
    queryFn: () => themeService.getUserThemes()
  })
  return (
    <>
      <Header />
      <div className="container mx-auto space-y-8 p-6">
        <Notify />
        <div className="grid grid-cols-1 gap-y-4 xl:grid-cols-3 xl:gap-x-4">
          <Profile />

          <Statistics />
          <BooksDashboard />
          <CardWrapper
            className="col-span-1 max-md:min-h-[380px]"
            title="Стастистика чтения"
            subtitle="Книг за год"
          >
            <BooksPerYearGraph />
          </CardWrapper>
          <CardWrapper
            title="Стастистика чтения"
            className="col-span-1"
            subtitle="Страниц за неделю"
          >
            <PagesPerWeekGraph />
          </CardWrapper>
          <CardWrapper
            title="Стастистика чтения"
            className="col-span-1"
            subtitle="Книги прочитанные за месяц"
          >
            <BooksPerMonthsGraph />
          </CardWrapper>
          <CardWrapper title="Стастистика чтения" subtitle="Минут за неделю">
            <MinutesPerWeekGraph />
          </CardWrapper>

          <BalanceCard />
          <ChappiPassCard />
          <AchievementsCard />
          <TableCard
            refetch={refetchExtensions}
            isLoading={isExtensionLoading}
            data={extensions}
            is="extension"
          />
          <TableCard
            refetch={refetchThemes}
            isLoading={isThemeLoading}
            data={themes}
            is="theme"
          />
        </div>
      </div>
    </>
  )
}
