import Image from "next/image"
import Link from "next/link"
import { Search } from "./search"
import { UserNav } from "./user-nav"
import { config } from "@/config"

export const Header = () => {
  return (
    <header className="font-comfortaa sticky top-0 z-50 w-full bg-muted backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-muted/25 dark:shadow-secondary">
      <div className="mx-4 flex h-14 items-center justify-between gap-8 sm:mx-8">
        <div className="flex w-full max-w-[130px] items-center gap-x-4 max-md:hidden">
          <Link
            href="/"
            className="text-baselg:text-lg flex items-center gap-2"
          >
            <Image src={config.icon} alt={config.name} width={36} height={36} />
            <span>{config.name}</span>
          </Link>
        </div>
        <div className="flex w-full items-center justify-center">
          <Search />
        </div>
        <div className="flex w-full max-w-fit justify-end md:max-w-[130px]">
          <UserNav />
        </div>
      </div>
    </header>
  )
}
