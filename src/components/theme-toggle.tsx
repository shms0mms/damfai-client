"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { useState } from "react"
import { CustomizeTheme } from "@/components/blocks/customize-theme"
import { Button } from "@/components/ui/button"
import {
  Credenza,
  CredenzaContent,
  CredenzaDescription,
  CredenzaHeader,
  CredenzaTitle
} from "@/components/ui/credenza"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

type ThemeToggleProps = {
  expanded?: boolean
  iconSize?: number
}

export function ThemeToggle({
  iconSize = 16,
  expanded = false
}: ThemeToggleProps) {
  const [isCustomThemeOpen, setIsCustomThemeOpen] = useState(false)
  const { setTheme } = useTheme()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size={expanded ? "default" : "icon"}
            className={cn({
              "flex h-auto w-full items-center justify-start gap-3 rounded-sm border-0 px-2 py-1.5":
                expanded
            })}
          >
            <SunIcon
              width={iconSize}
              height={iconSize}
              className={cn(
                "rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
                {
                  "text-muted-foreground": expanded
                }
              )}
            />
            <MoonIcon
              width={iconSize}
              height={iconSize}
              className={cn(
                "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
                {
                  "text-muted-foreground": expanded
                }
              )}
            />
            {expanded ? "Сменить тему" : null}
            <span className="sr-only">Сменить тему</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align={expanded ? "start" : "end"}
          className="w-[215px]"
        >
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Светлая
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Темная
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("reading")}>
            Для чтения
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setIsCustomThemeOpen(true)}>
            Кастомизировать
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Credenza open={isCustomThemeOpen} onOpenChange={setIsCustomThemeOpen}>
        <CredenzaContent className="max-w-[50rem]">
          <CredenzaHeader>
            <CredenzaTitle>Кастомизировать тему</CredenzaTitle>
            <CredenzaDescription>
              Настройте цветовую тему под свой вкус
            </CredenzaDescription>
          </CredenzaHeader>
          <CustomizeTheme />
        </CredenzaContent>
      </Credenza>
    </>
  )
}
