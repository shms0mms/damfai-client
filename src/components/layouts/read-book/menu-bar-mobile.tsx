"use client"

import { Pivot as Hamburger } from "hamburger-react"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from "lucide-react"
import Link from "next/link"
import {
  FloatingButton,
  FloatingButtonItem
} from "@/components/ui/floating-button"
import { MenuBarProps } from "./menu-bar"
import { cn } from "@/lib/utils"

export function MenuBarMobile(props: MenuBarProps) {
  const prevPage = props.pages > 1 ? props?.currentPage - 1 : undefined
  const nextPage =
    props.currentPage >= props.pages + 1 ? props.currentPage + 1 : undefined

  const currentChapterIndex = props.chapters.findIndex(
    chapter => chapter.id === props.currentChapterId
  )
  const prevChapter = props.chapters[currentChapterIndex - 1]!
  const nextChapter = props.chapters[currentChapterIndex + 1]!

  const items = [
    {
      icon: <ChevronRight />,
      href: `?chapter=${props.currentChapterId}&page=${nextPage}`,
      bgColor: "bg-[#1877f2]"
    },
    {
      icon: <ChevronLeft />,
      href: `?chapter=${props.currentChapterId}&page=${prevPage}`,
      bgColor: "bg-[#ea4c89]"
    },
    {
      icon: <ChevronsRight />,
      href: `?chapter=${nextChapter.id}&page=1`,
      bgColor: "bg-[#0a66c2]"
    },
    {
      icon: <ChevronsLeft />,
      href: `?chapter=${prevChapter.id}&page=1`,
      bgColor: "bg-[#ea4c89]"
    }
  ]
  return (
    <>
      <FloatingButton
        triggerContent={
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground/5 md:hidden">
            <Hamburger size={20} />
          </div>
        }
      >
        {items.map((item, key) => (
          <FloatingButtonItem key={key}>
            <Link
              href={item.href}
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full text-white/80",
                item.bgColor
              )}
            >
              {item.icon}
            </Link>
          </FloatingButtonItem>
        ))}
      </FloatingButton>
    </>
  )
}
