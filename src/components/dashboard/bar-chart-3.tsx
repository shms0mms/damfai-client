"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Январь", value: 5 },
  { name: "Февраль", value: 3 },
  { name: "Март", value: 7 },
  { name: "Апрель", value: 4 },
  { name: "Май", value: 6 },
  { name: "Июнь", value: 2 }
]

const COLORS = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40"
]

export default function BarChart3() {
  const total = data.reduce((sum, entry) => sum + entry.value, 0)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value, name) => [
            `${value} книг (${((+value / total) * 100).toFixed(1)}%)`,
            name
          ]}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
