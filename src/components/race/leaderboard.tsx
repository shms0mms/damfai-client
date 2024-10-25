import React from "react"
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

export const LeaderBoard = () => {
  return (
    <Table className="mx-auto w-full max-w-[40rem]">
      <TableCaption>Список лидеров этого месяца</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Имя</TableHead>
          <TableHead className="w-[150px]">Кол-во очков</TableHead>
          <TableHead className="w-[100px] text-right">Награда</TableHead>
        </TableRow>
      </TableHeader>
    </Table>
  )
}
