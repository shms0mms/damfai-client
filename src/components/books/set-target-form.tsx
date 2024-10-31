"use client"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Book } from "@/types/book"
import { BookForm, FormSchema } from "./book-form"
import { readBookService } from "@/services/read-book.service"

export function PurposeForm({
  params,
  book
}: {
  book: Book
  params: { id: string }
}) {
  const { push } = useRouter()
  const { mutate } = useMutation({
    mutationFn: ({ data, book_id }: { data?: FormSchema; book_id: number }) =>
      readBookService.startRead(book_id, data),
    onSuccess: () => {
      push(`/books/read/${params.id}`)
      toast.success("Вы успешно открыли новую книгу!")
    },
    onError: err => {
      const statusCode = err.response?.status
      if (statusCode === 400) {
        toast.error(
          "Произошла ошибка, эта книга уже есть в списках ваших книг!"
        )
      } else {
        toast.error("Произошла ошибка, повторите попытку позже!")
      }
    }
  })
  const onSubmit = async (data: FormSchema) => {
    mutate(
      data.withTarget ? { book_id: +params.id, data } : { book_id: +params.id }
    )
  }
  return (
    <>
      <BookForm canToggleChecking onSubmit={onSubmit} />
    </>
  )
}
