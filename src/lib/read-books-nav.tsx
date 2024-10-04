import { BookmarkIcon } from "@radix-ui/react-icons"
import React, { type FC } from "react"
import { Menu } from "@/components/read-book/menu"
import { ThemeToggle } from "@/components/theme-toggle"

type ReadBookNavItem = {
  id: string
} & (
  | { action: () => void; icon: React.ReactNode }
  | {
      component: FC
    }
)

export const useReadBooksNavigation = (): ReadBookNavItem[] => [
  // {
  //   id: "chappi",
  //   component: Chappi
  // },
  {
    id: "book-mark",
    action: () => {},
    icon: <BookmarkIcon width={20} height={20} />
  },
  {
    id: "theme",
    component: ThemeToggle
  },
  {
    id: "menu",
    component: Menu
  }
]
