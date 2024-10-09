"use client"

import { Loader } from "lucide-react"
import { useStatistics } from "@/hooks/useStatistics"
import { StatisticsItem } from "@/components/dashboard/statistics-item"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

export function Statistics() {
  const { statistics, isLoading } = useStatistics()
  return (
    <>
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Чтение аналитических материалов</CardTitle>
          <CardDescription>
            Краткий обзор вашей статистики чтения
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 grid grid-cols-2 gap-4 max-md:grid-cols-1 max-md:gap-8">
          {statistics?.length ? (
            statistics?.map(item => (
              <StatisticsItem
                isLoading={isLoading}
                key={item.title}
                {...item}
              />
            ))
          ) : (
            <Loader className="animate-spin" size={20} />
          )}
        </CardContent>
      </Card>
    </>
  )
}
