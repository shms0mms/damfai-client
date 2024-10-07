"use client"

import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons"
import { Book } from "@/types/book"
import { useFavourite } from "@/hooks/useFavourite"

export function FavouriteButton({ book }: { book: Book }) {
  const { mutate: toggle } = useFavourite()
  return (
    <button
      type="button"
      onClick={() => toggle(book?.id)}
      className="flex w-full justify-end"
    >
      {book?.is_favourite ? (
        <HeartFilledIcon width={20} height={20} />
      ) : (
        <HeartIcon width={20} height={20} />
      )}
    </button>
  )
}
