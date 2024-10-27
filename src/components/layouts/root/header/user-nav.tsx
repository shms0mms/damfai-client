"use client"

import { LogOut, UserIcon } from "lucide-react"
import Link from "next/link"
import { useContext } from "react"
import { ROUTES } from "@/config/route.config"
import { AuthContext } from "@/components/providers/auth-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import { logout } from "@/lib/auth"
import { cn } from "@/lib/utils"

export const UserNav = () => {
  const { user, isLoading } = useContext(AuthContext)

  return !isLoading && user ? (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className={cn("relative h-8 w-8 rounded-full")}
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    {user?.name?.slice(0, 2)?.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="sr-only">Открыть ваше меню</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="bottom">Вы</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent
        className="font-comfortaa w-56"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:cursor-pointer" asChild>
            <Link href={ROUTES.DASHBOARD} className="flex items-center">
              <UserIcon className="mr-3 h-4 w-4 text-muted-foreground" />
              Профиль
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <ThemeToggle expanded />
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={logout} className="hover:cursor-pointer">
            <LogOut className="mr-3 h-4 w-4 text-muted-foreground" />
            Выйти
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Skeleton className="h-8 w-8 rounded-full bg-primary/10" />
  )
}
