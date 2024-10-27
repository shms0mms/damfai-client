"use client"

import { useQuery } from "@tanstack/react-query"
import { StatisticsItem } from "@/types/statistics"
import { analyticsService } from "@/services/analytics.service"

export function useStatistics() {
  const { data, ...props } = useQuery({
    queryKey: ["/statistics"],
    queryFn: () => analyticsService.getStatistics()
  })
  const _data = data?.data
  const statistics: StatisticsItem[] = [
    {
      title: "Общее количество прочитанных книг",
      count: _data?.books_count! || "0"
    },
    {
      title: "Общее количество прочитанных страниц",
      count: _data?.pages_count! || "0"
    },

    {
      title: "Книги, прочитанные в этом месяце",
      count: _data?.books_per_month! || "0"
    },
    {
      title: "Страницы, прочитанные в этом месяце",
      count: _data?.pages_per_month! || "0"
    },
    {
      title: "Среднее время считывания",
      count: `${_data?.minutes_per_day! || "0"}мин/день`
    },
    {
      title: "Скорость чтения в минуту",
      count: `${_data?.words_per_min.toFixed(1)! || "0"}слов/мин`
    },
    {
      title: "Предварительный подсчёт прочитанных минут на завтра",
      count: `0`
    },
    {
      title: "Предварительный подсчёт прочитанных страниц на завтра",
      count: `0`
    }
  ]

  return { statistics, ...props }
}
