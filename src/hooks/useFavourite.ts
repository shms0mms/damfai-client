"use client"

import { useMutation, useQuery } from "@tanstack/react-query"
import { toast } from "sonner"
import { favouriteService } from "@/services/favourite.service"

export function useFavourite(bookId: number) {
  const query = useQuery({
    queryKey: ["favourite", bookId],
    queryFn: () => favouriteService.isFavourite(bookId),
    retry: false,
    select: data => data.is_favourite
  })
  const mutation = useMutation({
    mutationFn: (bookId: number) => favouriteService.update(bookId),
    async onSuccess({ data }) {
      await query.refetch()
      if (data) toast.success("Успешно добавлено в избранное!")
      else toast.success("Успешно удалено из избранного!")
    }
  })

  return { ...mutation, ...query }
}
