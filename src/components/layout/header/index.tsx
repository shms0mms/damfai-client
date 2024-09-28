import Image from "next/image"
import Link from "next/link"
import { Search } from "@/components/layout/header/search"
import { UserNav } from "./user-nav"
import { config } from "@/config"

export const Header = () => {
  return (
    <header className="font-comfortaa sticky top-0 z-50 w-full border-b bg-muted backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-muted/25 dark:shadow-secondary">
      <div className="mx-4 flex h-14 items-center justify-between gap-8 sm:mx-8">
        <div className="flex w-full max-w-[130px] items-center gap-x-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-base max-md:hidden lg:text-lg"
          >
            <Image src={config.icon} alt={config.name} width={36} height={36} />
            <span>{config.name}</span>
          </Link>
        </div>
        <div className="flex w-full items-center justify-center">
          <Search />
        </div>
        <div className="flex w-full max-w-[130px] justify-end">
          <UserNav />
        </div>
      </div>
    </header>
  )
}
