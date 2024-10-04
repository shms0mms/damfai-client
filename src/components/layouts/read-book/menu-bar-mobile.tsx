"use client"

import { Pivot as Hamburger } from "hamburger-react"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from "lucide-react"
import {
  FloatingButton,
  FloatingButtonItem
} from "@/components/ui/floating-button"
import { cn } from "@/lib/utils"

export function MenuBarMobile() {
  const items = [
    {
      icon: <ChevronRight />,
      bgColor: "bg-[#1877f2]"
    },
    {
      icon: <ChevronLeft />,
      bgColor: "bg-[#ea4c89]"
    },
    {
      icon: <ChevronsRight />,
      bgColor: "bg-[#0a66c2]"
    },
    {
      icon: <ChevronsLeft />,
      bgColor: "bg-[#ea4c89]"
    }
  ]
  return (
    <>
      <FloatingButton
        triggerContent={
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground/5">
            <Hamburger size={20} />
          </div>
        }
      >
        {items.map((item, key) => (
          <FloatingButtonItem key={key}>
            <button
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full text-white/80",
                item.bgColor
              )}
            >
              {item.icon}
            </button>
          </FloatingButtonItem>
        ))}
      </FloatingButton>
    </>
  )
}
