"use client"

import { useQuery } from "@tanstack/react-query"
import { Bar, BarChart, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart"
import { GraphFallback } from "./graph-fallback"
import { analyticsService } from "@/services/analytics.service"
import { RecordOf } from "@/types"

const chartConfig = {
  количество: {
    label: "количество",
    color: "#2563eb"
  }
} satisfies ChartConfig

const BooksPerMonthsGraph = () => {
  const { data: _data } = useQuery({
    queryFn: () => analyticsService.getGraphBooksPerMonths(),
    queryKey: ["/graph/books-per-months"]
  })

  const months = _data ? _data : {}
  const data = Object.keys(months)
    .slice(6)
    .map(month => ({
      month,
      количество: (months as RecordOf<number>)[month]!
    }))
  return (
    <>
      {data.every(d => !d.количество) ? (
        <GraphFallback />
      ) : (
        <ChartContainer config={chartConfig} className="">
          <BarChart accessibilityLayer data={data}>
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={value => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="количество"
              fill="var(--color-количество)"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      )}
    </>
  )
}

export default BooksPerMonthsGraph
