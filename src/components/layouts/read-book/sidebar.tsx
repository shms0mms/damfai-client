"use client"

import { useState } from "react"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"

export function SideBar({
  pages: _pages,
  currentChapterId,
  bookId
}: {
  pages: number
  currentChapterId: string
  bookId: string
}) {
  const pages = Array.from({ length: _pages }, (_, i) => i + 1)
  const links = pages?.length
    ? pages.map(p => ({
        label: "Страница",
        icon: p.toString(),
        href: `/books/read/${bookId}?chapter=${currentChapterId}&page=${p}`
      }))
    : []

  const [open, setOpen] = useState(false)
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="z-[51] justify-between">
        <div className="flex flex-col overflow-y-auto overflow-x-hidden">
          <div className="mt-8 flex flex-col gap-y-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  )
}
