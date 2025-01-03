"use client"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Book } from "@/types/book"
import { BookForm, FormSchema } from "./book-form"
import { readBookService } from "@/services/read-book.service"

export function PurposeForm({
  params,
  book: _book
}: {
  book: Book
  params: { id: string }
}) {
  const { push } = useRouter()
  const { mutate } = useMutation({
    mutationFn: ({ data, bookId }: { data?: FormSchema; bookId: number }) =>
      readBookService.startRead(bookId, data),
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
      data.withTarget ? { bookId: +params.id, data } : { bookId: +params.id }
    )
  }
  return (
    <>
      <BookForm canToggleChecking onSubmit={onSubmit} />
    </>
  )
}
