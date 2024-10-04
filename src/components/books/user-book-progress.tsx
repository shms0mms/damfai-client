"use client"

import { FC } from "react"
import { Progress } from "../ui/progress"

type UserBookProgressProps = {
  value: number
}

export const UserBookProgress: FC<UserBookProgressProps> = ({ value }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xs">Прогресс {value}%</p>
      <Progress value={value} />
    </div>
  )
}
