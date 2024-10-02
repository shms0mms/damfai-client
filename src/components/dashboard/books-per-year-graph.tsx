"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "../ui/chart"

const data = [
  { name: "Январь", books_per_year: 5 },
  { name: "Февраль", books_per_year: 3 },
  { name: "Март", books_per_year: 7 },
  { name: "Апрель", books_per_year: 4 },
  { name: "Май", books_per_year: 6 },
  { name: "Июнь", books_per_year: 2 }
]

const COLORS = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40"
]
const chartConfig = {
  data: {}
} satisfies ChartConfig

export default function BooksPerYearGraph() {
  const total = data.reduce((sum, entry) => sum + entry.books_per_year, 0)

  return (
    <ChartContainer config={chartConfig}>
      <PieChart className="min-h-[330px]">
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="books_per_year"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <ChartTooltip
          formatter={(books_per_year, name) => [
            `${books_per_year} книг (${((+books_per_year / total) * 100).toFixed(1)}%)`,
            name
          ]}
          content={<ChartTooltipContent />}
        />
      </PieChart>
    </ChartContainer>
  )
}
