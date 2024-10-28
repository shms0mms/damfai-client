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
  const { data: _data } = useQuery({
    queryFn: () => analyticsService.getGraphBooksPerYear(),
    queryKey: ["/graph/books-per-year"]
  })
  const year = _data?.data ? _data?.data : {}
  const data = Object.keys(year).map(month => ({
    month: month.slice(0, 3),
    количество: (year as RecordOf<number>)[month]! + 1
  }))

  const total = data.reduce((sum, entry) => sum + entry.количество, 0) - 12
  const filteredData = data.filter(d => d.количество)

  return (
    <>
      {data.every(d => !d.количество) ? (
        <GraphFallback />
      ) : (
        <ChartContainer config={chartConfig}>
          <PieChart className="sm:min-width-[320px] min-h-[380px]">
            <Pie
              data={filteredData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={150}
              fill="#8884d8"
              dataKey="количество"
              label={({ month, value }) => `${month} ${value - 1}`}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <ChartTooltip
              formatter={(количество, month) => [
                `${filteredData[+month!]?.month} ${+количество - 1} книг`
              ]}
              content={<ChartTooltipContent />}
            />
          </PieChart>
        </ChartContainer>
      )}
    </>
  )
}
