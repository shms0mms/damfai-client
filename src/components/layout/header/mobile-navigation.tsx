"use client"

import { Menu } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/site.config"
import Logo from "@/components/ui/logo"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import { getMainNav } from "@/lib/main-nav"
import { cn } from "@/lib/utils"

export const MobileNavigation = () => {
  const pathname = usePathname()

  const items = getMainNav(pathname)
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col gap-4">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-1">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <nav>
          <ul className="flex flex-col gap-1">
            {items.map(item => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-2 text-lg font-medium text-foreground/50 transition-colors duration-200 before:absolute before:-bottom-1 before:left-0 before:h-px before:w-full before:scale-x-0 before:bg-foreground before:transition-transform before:content-[''] active:before:scale-x-100",
                    {
                      "text-foreground": item.active
                    }
                  )}
                >
                  {item.icon}
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
