"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useQuery } from "@tanstack/react-query"
import { Lock } from "lucide-react"
import { useTheme } from "next-themes"
import { useContext, useState } from "react"
import { toast } from "sonner"
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
import { AuthContext } from "./providers/auth-profider"
import { ColorThemeContext } from "./providers/theme-provider"
import { cn } from "@/lib/utils"
import { userService } from "@/services/user.service"

type ThemeToggleProps = {
  expanded?: boolean
  iconSize?: number
}

export function ThemeToggle({
  iconSize = 16,
  expanded = false
}: ThemeToggleProps) {
  const { user } = useContext(AuthContext)
  const haveCustomThemeExtension = !!user?.extensions?.find(
    e => e.slug === "custom-theme"
  )

  const [isCustomThemeOpen, setIsCustomThemeOpen] = useState(false)
  const { setTheme } = useTheme()
  const { setColorTheme, removeColorTheme } = useContext(ColorThemeContext)
  const { data: userThemes } = useQuery({
    initialData: undefined,
    queryKey: ["user", "theme"],
    queryFn: userService.getUserThemes
  })

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
          <DropdownMenuItem
            onClick={() => {
              setTheme("light")
              removeColorTheme()
            }}
          >
            Светлая
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setTheme("dark")
              removeColorTheme()
            }}
          >
            Темная
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {userThemes?.map(theme => (
            <DropdownMenuItem
              key={theme.id}
              onClick={() => {
                setColorTheme(theme.key)
                removeColorTheme()
              }}
            >
              {theme.name}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              if (!haveCustomThemeExtension)
                return toast.info(
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-yellow-500" /> Кастомизация
                    темы доступна только с расширением
                  </div>,
                  {
                    position: "top-center"
                  }
                )
              setIsCustomThemeOpen(true)
            }}
            className={cn({ "opacity-50": !haveCustomThemeExtension })}
          >
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
