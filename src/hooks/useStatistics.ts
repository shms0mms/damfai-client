"use client"

import { useQuery } from "@tanstack/react-query"
import { StatisticsItem } from "@/types/statistics"
import { analyticsService } from "@/services/analytics.service"

export function useStatistics() {
  const { data, isLoading, ...props } = useQuery({
    queryKey: ["/statistics"],
    queryFn: () => analyticsService.getStatistics(),
    select: data => data.data
  })

  const statistics: StatisticsItem[] =
    isLoading || !data
      ? []
      : [
          {
            title: "Общее количество прочитанных книг",
            count: data.books_count || "0"
          },
          {
            title: "Общее количество прочитанных страниц",
            count: data.pages_count || "0"
          },

          {
            title: "Книги, прочитанные в этом месяце",
            count: data.books_per_month || "0"
          },
          {
            title: "Страницы, прочитанные в этом месяце",
            count: data.pages_per_month || "0"
          },
          {
            title: "Среднее время считывания",
            count: `${data.minutes_per_day || "0"}мин/день`
          },
          {
            title: "Скорость чтения в минуту",
            count: `${data.words_per_min.toFixed(1) || "0"}слов/мин`
          },
          {
            title: "Предварительный подсчёт прочитанных минут на завтра",
            count: `${data.predicted_minutes || "0"}`
          },
          {
            title: "Предварительный подсчёт прочитанных страниц на завтра",
            count: `${data.predicted_pages || "0"}`
          }
        ]

  return { statistics, isLoading, ...props }
}
