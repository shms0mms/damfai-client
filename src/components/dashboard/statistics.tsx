"use client"

import { useStatistics } from "@/hooks/useStatistics"
import StatisticsItemComponent from "@/components/dashboard/statistics-item"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

export default function Statistics() {
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
          {statistics.map(item => (
            <StatisticsItemComponent
              isLoading={isLoading}
              key={item.title}
              {...item}
            />
          ))}
        </CardContent>
      </Card>
    </>
  )
}
