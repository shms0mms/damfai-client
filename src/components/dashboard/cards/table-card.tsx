"use client"

import { AxiosResponse } from "axios"
import { useTheme } from "next-themes"
import { Extension, Theme } from "@/types/shop"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { RemoveCellButton } from "../remove-cell-button"
import { CardWrapper } from "./card-wrapper"

type Props<T> = {
  data?: T[] | undefined
  is: "theme" | "extension"
  isLoading: boolean
  refetch: () => void
}
export function TableCard<T extends Theme | Extension>({
  data,
  is,
  isLoading,
  refetch
}: Props<T>) {
  const { theme } = useTheme()

  return (
    <CardWrapper
      title={is === "extension" ? "Ваши расширения" : "Ваши темы"}
      className="col-span-1"
      subtitle={
        is === "extension"
          ? "Получай больше возможностей благодаря расширениям"
          : "Наслаждайся красотой всех наших тем"
      }
    >
      <Table wrapperClassName="w-full flex flex-col">
        <TableBody className="">
          {data?.length ? (
            data?.map(item => (
              <TableRow key={item.id}>
                <TableCell className="flex items-center gap-2 p-4">
                  {"title" in item ? null : (
                    <div
                      className="aspect-square h-4 w-4 rounded"
                      style={{
                        background: `hsl(${item[theme as "dark" | "light"].primary})`
                      }}
                    ></div>
                  )}
                  {"title" in item ? item.title : item.name}
                </TableCell>
                <RemoveCellButton id={item.id} is={is} refetch={refetch} />
              </TableRow>
            ))
          ) : isLoading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className="h-9 w-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-9 w-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-9 w-full" />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className="flex min-h-[340px] items-center justify-center">
              <TableCell className="text-center">Элементов пока нет</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </CardWrapper>
  )
}
