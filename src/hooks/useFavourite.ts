"use client"

import { useMutation, useQuery } from "@tanstack/react-query"
import { toast } from "sonner"
import { favouriteService } from "@/services/favourite.service"

export function useFavourite(book_id: number) {
  const query = useQuery({
    queryKey: ["favourite", book_id],
    queryFn: () => favouriteService.is_favourite(book_id),
    retry: false
  })
  const mutation = useMutation({
    mutationFn: (book_id: number) => favouriteService.update(book_id),
    async onSuccess({ data }) {
      await query.refetch()
      if (data) toast.success("Успешно добавлено в избранное!")
      else toast.success("Успешно удалено из избранного!")
    }
  })

  return { ...mutation, ...query }
}
