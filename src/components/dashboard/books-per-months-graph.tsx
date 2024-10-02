"use client"

import { Bar, BarChart, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart"

const data = [
  { month: "Jan", books_per_months: 3 },
  { month: "Feb", books_per_months: 2 },
  { month: "Mar", books_per_months: 4 },
  { month: "Apr", books_per_months: 3 },
  { month: "May", books_per_months: 5 },
  { month: "Jun", books_per_months: 4 }
]
const chartConfig = {
  books_per_months: {
    label: "books_per_months",
    color: "#2563eb"
  }
} satisfies ChartConfig

const BooksPerMonthsGraph = () => {
  return (
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
          dataKey="books_per_months"
          fill="var(--color-books_per_months)"
          radius={4}
        />
      </BarChart>
    </ChartContainer>
  )
}

export default BooksPerMonthsGraph
