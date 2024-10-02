"use client"

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"

const data = [
  {
    month: "Апрель",
    minutes_per_week: 1213
  },
  {
    month: "Май",
    minutes_per_week: 3242
  },
  {
    month: "Июнь",
    minutes_per_week: 333
  },
  {
    month: "Июль",
    minutes_per_week: 2332
  },
  {
    month: "Август",
    minutes_per_week: 3325
  },
  {
    month: "Сентябрь",
    minutes_per_week: 2352
  }
]
export default function MinutesPerWeekGraph() {
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
          <XAxis dataKey="month" tick={{ fill: "hsl(var(--foreground))" }} />
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
            dataKey="minutes_per_week"
            stroke="hsl(var(--primary))"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
