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

const readingData = [
  { month: "Jan", books: 3 },
  { month: "Feb", books: 2 },
  { month: "Mar", books: 4 },
  { month: "Apr", books: 3 },
  { month: "May", books: 5 },
  { month: "Jun", books: 4 }
]
const BarChart1 = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={readingData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="books" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChart1
