"use client"

import { useQuery } from "@tanstack/react-query"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
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
import type { RecordOf } from "@/types"

const chartConfig = {
  количество: {
    label: "количество",
    color: "#2563eb"
  },
  month: {
    label: "month",
    color: "#60a5fa"
  }
} satisfies ChartConfig

export function PagesPerWeekGraph() {
  const { data: _data } = useQuery({
    queryFn: () => analyticsService.getGraphMinutesPerWeek(),
    queryKey: ["/graph/pages-per-week"]
  })
  const months = _data?.data ? _data?.data : {}
  const data = Object.keys(months)
    .slice(2)
    .map(month => ({
      month,
      количество: (months as RecordOf<number>)[month]
    }))

  return (
    <>
      {data.every(d => !d.количество) ? (
        <GraphFallback />
      ) : (
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
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
            <Bar dataKey="pages" fill="var(--color-pages)" radius={4} />
          </BarChart>
        </ChartContainer>
      )}
    </>
  )
}
