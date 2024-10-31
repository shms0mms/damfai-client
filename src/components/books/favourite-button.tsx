"use client"

import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons"
import { useFavourite } from "@/hooks/useFavourite"
import { Button } from "../ui/button"

export function FavouriteButton({ book_id }: { book_id: number }) {
  const { mutate: toggle, data } = useFavourite(book_id)
  const is_favourite = data?.is_favourite
  return (
    <Button
      size={"icon"}
      variant={"outline"}
      type="button"
      className="h-6 w-6"
      onClick={() => toggle(book_id)}
    >
      {is_favourite ? (
        <HeartFilledIcon width={14} height={14} />
      ) : (
        <HeartIcon width={14} height={14} />
      )}
    </Button>
  )
}
