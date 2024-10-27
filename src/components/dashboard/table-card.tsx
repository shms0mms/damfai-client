"use client"

import { AxiosResponse } from "axios"
import { Extension, Theme } from "@/types/shop"
import { Skeleton } from "../ui/skeleton"
import { Table, TableBody, TableCell, TableRow } from "../ui/table"
import { CardWrapper } from "./card-wrapper"
import { RemoveCellButton } from "./remove-cell-button"

type Props<T> = {
  data?: AxiosResponse<T[], any> | undefined
  is: "theme" | "extension"
  isLoading: boolean
  refetch: () => void
}
export function TableCard<T extends Theme & Extension>({
  data,
  is,
  isLoading,
  refetch
}: Props<T>) {
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
          {data?.data?.length ? (
            data?.data?.map((i: T) => (
              <TableRow key={i.id}>
                {is === "extension" ? (
                  <>
                    <TableCell className="p-4">{i.title}</TableCell>
                    <TableCell className="p-4">{i.description}</TableCell>
                  </>
                ) : (
                  <></>
                )}
                <RemoveCellButton id={i.id} is={is} refetch={refetch} />
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
