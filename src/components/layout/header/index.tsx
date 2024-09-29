import Image from "next/image"
import Link from "next/link"
import { LoginButton } from "./login-button"
import { MobileNavigation } from "./mobile-navigation"
import { Navigation } from "./navigation"
import { Search } from "./search"
import { config } from "@/config"

export const Header = () => {
  return (
    <header className="font-comfortaa sticky top-0 z-50 w-full bg-muted backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-muted/25 dark:shadow-secondary">
      <div className="mx-4 flex h-14 items-center justify-between gap-4 sm:mx-8 md:gap-8">
        <div className="flex items-center justify-between gap-2 md:w-full md:max-w-[250px]">
          <div className="flex w-full items-center gap-x-4 max-md:hidden">
            <Link
              href="/"
              className="text-baselg:text-lg flex items-center gap-2"
            >
              <Image
                src={config.icon}
                alt={config.name}
                width={36}
                height={36}
              />
              <span>{config.name}</span>
            </Link>
          </div>
          <MobileNavigation />
          <Navigation />
        </div>
        <div className="flex w-full items-center justify-center">
          {/* <Search /> */}
        </div>
        <div className="flex w-full max-w-fit justify-end md:max-w-[250px]">
          <LoginButton />
          {/* <UserNav /> */}
        </div>
      </div>
    </header>
  )
}
