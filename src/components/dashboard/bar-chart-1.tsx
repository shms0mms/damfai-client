"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "../ui/chart"

const readingData = [
  { month: "Jan", books: 3 },
  { month: "Feb", books: 2 },
  { month: "Mar", books: 4 },
  { month: "Apr", books: 3 },
  { month: "May", books: 5 },
  { month: "Jun", books: 4 }
]
const chartConfig = {
  books: {
    label: "books",
    color: "#2563eb"
  }
} satisfies ChartConfig

const BarChart1 = () => {
  return (
    <ChartContainer config={chartConfig} className="">
      <BarChart accessibilityLayer data={readingData}>
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
      </BarChart>
    </ChartContainer>
  )
}

export default BarChart1
