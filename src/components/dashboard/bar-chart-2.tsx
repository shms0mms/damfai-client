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

const chartData = [
  { month: "January", books: 186, pages: 80 },
  { month: "February", books: 305, pages: 200 },
  { month: "March", books: 237, pages: 120 },
  { month: "April", books: 73, pages: 190 },
  { month: "May", books: 209, pages: 130 },
  { month: "June", books: 214, pages: 140 }
]

const chartConfig = {
  books: {
    label: "books",
    color: "#2563eb"
  },
  pages: {
    label: "pages",
    color: "#60a5fa"
  }
} satisfies ChartConfig

export default function BarChart2() {
  return (
    <ChartContainer config={chartConfig} className="">
      <BarChart accessibilityLayer data={chartData}>
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
        <Bar dataKey="books" fill="var(--color-books)" radius={4} />
        <Bar dataKey="pages" fill="var(--color-pages)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
