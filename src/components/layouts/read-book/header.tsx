"use client"

import { Menu } from "lucide-react"
import { type FC, useEffect, useState } from "react"
import { ReadBookData } from "@/hooks/useReadBookData"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { Bookmark } from "./bookmark"
import { padStart } from "@/lib/utils"

type HeaderProps = {
  readBookData: Partial<ReadBookData>
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const Header: FC<HeaderProps> = ({ readBookData, setOpen }) => {
  const [time, setTime] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = padStart(Math.floor(time / 3600))
  const minutes = padStart(Math.floor((time % 3600) / 60))
  const seconds = padStart(Math.floor(time % 60))

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between bg-background p-4 max-lg:bg-background">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
          <Logo />
        </div>
        <h1 className="text-2xl font-bold max-md:text-[0px]">
          {readBookData?.title}
        </h1>
        <div className="flex items-center space-x-2">
          {!!time && (
            <div className="flex min-w-[100px] items-center gap-x-1">
              <span className="max-md:text-[0px]">Время чтения:</span>
              <span>
                {hours}:{minutes}:{seconds}
              </span>
            </div>
          )}
          {!!readBookData?.page?.id && (
            <Bookmark currentPage={readBookData?.page?.id} />
          )}
          <ThemeToggle />
        </div>
      </header>
    </>
  )
}
