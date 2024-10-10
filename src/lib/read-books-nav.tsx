import { BookmarkIcon } from "@radix-ui/react-icons"
import { useMutation } from "@tanstack/react-query"
import { useParams, useSearchParams } from "next/navigation"
import React, { type FC } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { bookmarksService } from "@/services/bookmarks.service"

type ReadBookNavItem = {
  id: string
} & (
  | { action: () => void; icon: React.ReactNode }
  | {
      component: FC
    }
)

export const useReadBooksNavigation = (): ReadBookNavItem[] => {
  const { id } = useParams()
  const { mutate: toggle } = useMutation({
    mutationFn: ({ id, page }: { id: number; page: number }) =>
      bookmarksService.update(id, page)
  })
  const searchParams = useSearchParams()
  return [
    // {
    //   id: "chappi",
    //   component: Chappi
    // },
    {
      id: "book-mark",
      action: () => {
        toggle({ id: +id!, page: +searchParams.get("page")! })
      },
      icon: <BookmarkIcon width={20} height={20} />
    },
    {
      id: "theme",
      component: ThemeToggle
    }
  ]
}
