"use client"

import { Menu } from "lucide-react"
import React from "react"
import { ReadBookData } from "@/hooks/useReadBookData"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { ThemeSwitcher } from "@/components/ui/theme-switcher"
import Bookmark from "./bookmark"

type Props = {
  data: ReadBookData
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const Header = ({ data, setOpen }: Props) => {
  return (
    <>
      {/* <header className="sticky left-0 top-0 z-20 w-full border-b py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-muted/25 dark:shadow-secondary">
        <div className="container flex items-center justify-between gap-4">
          <Logo />
          <nav>
            <ul className="flex items-center gap-2">
              {navigation.map(item => (
                <li key={item.id}>
                  {"component" in item ? (
                    <item.component />
                  ) : (
                    <Button variant="outline" size="icon" onClick={item.action}>
                      {item.icon}
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header> */}
      <header className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between bg-foreground/5 p-4">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>{" "}
          <Logo />
        </div>
        <h1 className="text-2xl font-bold">{data?.title}</h1>
        <div className="flex items-center space-x-4">
          <Bookmark currentPage={data?.page?.id!} />
          <ThemeSwitcher />
        </div>
      </header>
    </>
  )
}
