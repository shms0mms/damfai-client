"use client"

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from "lucide-react"
import { Chappi } from "@/components/read-book/chappi"
import { Button } from "@/components/ui/button"
import { MenuBarMobile } from "./menu-bar-mobile"

export function MenuBar() {
  return (
    <div className="pointer-events-none fixed bottom-1/2 left-0 w-full translate-y-1/2">
      <div className="min-h-[80px] max-w-7xl py-2 2xl:container">
        <div className="flex flex-col items-start gap-1 max-2xl:hidden">
          <div className="flex w-full items-center justify-between gap-1">
            <div className="2xl:hidden">
              <Chappi />
            </div>
            <div className="flex w-full items-center justify-between gap-1">
              <Button
                className="pointer-events-auto flex items-center gap-2"
                type="button"
                variant={"outline"}
              >
                <ChevronLeft size={16} /> Page 1
              </Button>
              <Button
                type="button"
                className="pointer-events-auto flex items-center gap-2"
                variant={"outline"}
              >
                Page 2
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <Button
              className="pointer-events-auto flex items-center gap-2"
              type="button"
              variant={"outline"}
            >
              <ChevronsLeft size={12} /> Chapter 0
            </Button>
            <Button
              type="button"
              className="pointer-events-auto flex items-center gap-2"
              variant={"outline"}
            >
              Chapter 2 <ChevronsRight size={12} />
            </Button>
          </div>
        </div>
        <div className="flex w-full justify-end 2xl:hidden">
          <MenuBarMobile />
        </div>
      </div>
    </div>
  )
}
