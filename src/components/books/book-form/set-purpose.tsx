"use client"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Purpose, PurposeFormData } from "@/components/read-book/purpose"
import { readBookService } from "@/services/read-book.service"

export function SetPurpose({ id }: { id: number }) {
  const { push } = useRouter()
  const { mutate } = useMutation({
    mutationFn: (data: PurposeFormData) =>
      readBookService.makeTargetBook(id, data.minDays, data.maxDays),
    onSuccess: () => {
      push(`/books/read/${id}`)
      toast.success("Вы успешно задали цель для прочтения книги!")
    },
    onError: () => {
      toast.error("Произошла ошибка, повторите попытку позже!")
    }
  })

  const { mutate: startRead } = useMutation({
    mutationFn: (id: number) => readBookService.startRead(id),
    onSuccess: () => {
      push(`/books/read/${id}`)
      toast.success("Вы успешно открыли новую книгу!")
    },
    onError: () => {
      toast.error("Произошла ошибка, повторите попытку позже!")
    }
  })
  return (
    <Purpose
      canToggleChecking
      className="flex h-full flex-col justify-end"
      type="set"
      submitCallback={data => {
        !data.isChecking ? startRead(id) : mutate(data)
      }}
    />
  )
}
