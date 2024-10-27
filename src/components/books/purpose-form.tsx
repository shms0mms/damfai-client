"use client"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { Purpose, PurposeFormData } from "@/components/read-book/purpose"
import { readBookService } from "@/services/read-book.service"

export function PurposeForm({ params }: { params: { id: string } }) {
  const { push } = useRouter()
  const { mutate } = useMutation({
    mutationFn: (id: number) => readBookService.startRead(id),
    onSuccess() {
      push(`/books/read/${params.id}`)
    }
  })
  const onSubmit = async ({ isChecking }: PurposeFormData) => {
    if (!isChecking) mutate(+params.id)
  }
  return (
    <>
      <Purpose canToggleChecking onSubmit={onSubmit} type="set" />
    </>
  )
}
