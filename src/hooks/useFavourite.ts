import { useMutation } from "@tanstack/react-query"
import { favouriteService } from "@/services/favourite.service"

export function useFavourite() {
  return useMutation({
    mutationFn: (book_id: number) => favouriteService.update(book_id)
  })
}
