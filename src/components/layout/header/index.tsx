"use client"

import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import { siteConfig } from "@/config/site.config"
import { AuthContext } from "@/providers/auth"
import Logo from "@/components/ui/logo"
import { LoginButton } from "./login-button"
import { MobileNavigation } from "./mobile-navigation"
import { Navigation } from "./navigation"
import { UserNav } from "./user-nav"

export const Header = () => {
  const { user } = useContext(AuthContext)
  return (
    <header className="font-comfortaa sticky top-0 z-50 w-full bg-muted backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-muted/25 dark:shadow-secondary">
      <div className="mx-4 flex h-14 items-center justify-between gap-4 sm:mx-8 md:gap-8">
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
          {user?.id ? <UserNav /> : <LoginButton />}
        </div>
      </div>
    </header>
  )
}
