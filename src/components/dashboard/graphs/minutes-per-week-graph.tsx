"use client"

import { useQuery } from "@tanstack/react-query"
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"
import { analyticsService } from "@/services/analytics.service"
import { RecordOf } from "@/types"

export function MinutesPerWeekGraph() {
  const { data: _data } = useQuery({
    queryFn: () => analyticsService.getGraphMinutesPerWeek(),
    queryKey: ["/graph/minutes-per-week"]
  })

  const weekDays = _data?.data ? _data?.data : {}
  const data = Object.keys(weekDays)
    .slice(2)
    .map(day => ({
      weekDay: day,
      количество: (weekDays as RecordOf<number>)[day]
    }))

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="weekDay" tick={{ fill: "hsl(var(--foreground))" }} />
          <YAxis tick={{ fill: "hsl(var(--foreground))" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--background))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "6px"
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />
          <Line
            type="monotone"
            dataKey="количество"
            stroke="hsl(var(--primary))"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
