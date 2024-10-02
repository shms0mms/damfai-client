"use client"

import { useQuery } from "@tanstack/react-query"
import { StatisticsItem } from "@/types/statistics"
import { statisticsService } from "@/services/statistics.service"

export function useStatistics() {
  const { data, ...props } = useQuery({
    queryKey: ["/statistics"],
    queryFn: () => statisticsService.getStatistics()
  })
  const _data = data?.data
  const statistics: StatisticsItem[] = [
    {
      title: "Общее количество прочитанных книг",
      count: _data?.books_count!
    },
    {
      title: "Общее количество прочитанных страниц",
      count: _data?.pages_count!
    },

    {
      title: "Книги, прочитанные в этом месяце",
      count: _data?.books_per_month!
    },
    {
      title: "Страницы, прочитанные в этом месяце",
      count: _data?.pages_per_month!
    },
    {
      title: "Среднее время считывания",
      count: `${_data?.minutes_per_day!}мин/день`
    },
    {
      title: "Скорость чтения в минуту",
      count: `${_data?.words_per_min!}слов/мин`
    }
  ]

  return { statistics, ...props }
}
