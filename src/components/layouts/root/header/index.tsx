"use client"

import { Loader } from "lucide-react"
import { useContext } from "react"
import { AuthContext } from "@/components/providers/auth-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/ui/logo"
import { LoginButton } from "./login-button"
import { MobileNavigation } from "./mobile-navigation"
import { Navigation } from "./navigation"
import { UserNav } from "./user-nav"

export const Header = () => {
  const ctx = useContext(AuthContext)

  return (
    <header className="font-comfortaa sticky top-0 z-50 w-full bg-muted backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-muted/25 dark:shadow-secondary">
      <div className="flex min-h-14 items-center justify-between gap-4 px-4 sm:mx-8 md:gap-8">
        <div className="flex items-center gap-14">
          <div className="flex items-center gap-x-4 max-md:hidden">
            <Logo />
          </div>
          <MobileNavigation />
          <Navigation />
        </div>
        {/* <div className="flex w-full items-center justify-center">
          <Search />
        </div> */}
        <div className="flex w-full max-w-fit justify-end md:max-w-[250px]">
          {ctx.isLoading ? (
            <Loader size={20} className="animate-spin" />
          ) : ctx.isAuth && ctx.user ? (
            <UserNav />
          ) : (
            <div className="flex items-center gap-2">
              <LoginButton /> <ThemeToggle />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
