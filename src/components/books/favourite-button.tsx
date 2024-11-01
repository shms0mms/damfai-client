"use client"

import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons"
import { useFavourite } from "@/hooks/useFavourite"
import { Button } from "../ui/button"

export function FavouriteButton({ bookId }: { bookId: number }) {
  const { mutate: toggle, data: isFavourite } = useFavourite(bookId)

  return (
    <Button
      size={"icon"}
      variant={"outline"}
      type="button"
      className="h-auto min-h-6 w-auto min-w-6"
      onClick={() => toggle(bookId)}
    >
      {isFavourite ? (
        <HeartFilledIcon width={14} height={14} />
      ) : (
        <HeartIcon width={14} height={14} />
      )}
    </Button>
  )
}
