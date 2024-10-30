"use client"

import { useQuery } from "@tanstack/react-query"
import { Cell, Pie, PieChart } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart"
import { GraphFallback } from "./graph-fallback"
import { translateMonths } from "@/lib/translate"
import { analyticsService } from "@/services/analytics.service"
import { RecordOf } from "@/types"

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

export function BooksPerYearGraph() {
  const { data } = useQuery({
    queryFn: () => analyticsService.getGraphBooksPerYear(),
    queryKey: ["/graph/books-per-year"],
    select: data => data.data
  })
  const year = data ?? {}
  const booksPerYear = Object.keys(year).map(month => ({
    month: translateMonths[month as keyof typeof translateMonths].slice(0, 4),
    количество: (year as RecordOf<number>)[month]! + 1
  }))

  // const total =
  //   booksPerYear.reduce((sum, entry) => sum + entry.количество, 0) - 12
  const filteredBooksPerYear = booksPerYear.filter(d => d.количество)

  return (
    <>
      {booksPerYear.every(d => !d.количество) ? (
        <GraphFallback />
      ) : (
        <ChartContainer config={chartConfig}>
          <PieChart className="sm:min-width-[320px] min-h-[380px]">
            <Pie
              data={filteredBooksPerYear}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={150}
              fill="#8884d8"
              dataKey="количество"
              label={({ month }) => month}
            >
              {booksPerYear.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <ChartTooltip
              formatter={(количество, month) => [
                `${filteredBooksPerYear[+month!]?.month} ${+количество - 1} книг`
              ]}
              content={<ChartTooltipContent />}
            />
          </PieChart>
        </ChartContainer>
      )}
    </>
  )
}
