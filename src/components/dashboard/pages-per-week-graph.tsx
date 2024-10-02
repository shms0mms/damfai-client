"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart"

const data = [
  { month: "January", pages_per_week: 186 },
  { month: "February", pages_per_week: 305 },
  { month: "March", pages_per_week: 237 },
  { month: "April", pages_per_week: 73 },
  { month: "May", pages_per_week: 209 },
  { month: "June", pages_per_week: 214 }
]

const chartConfig = {
  pages_per_week: {
    label: "pages_per_week",
    color: "#2563eb"
  },
  pages: {
    label: "pages",
    color: "#60a5fa"
  }
} satisfies ChartConfig

export default function PagesPerWeekGraph() {
  return (
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
          dataKey="pages_per_week"
          fill="var(--color-pages_per_week)"
          radius={4}
        />
        <Bar dataKey="pages" fill="var(--color-pages)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
