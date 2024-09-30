"use client"

import { usePathname } from "next/navigation"
import { getMainNav } from "@/lib/main-nav"
import { cn } from "@/lib/utils"

export const Navigation = () => {
  const pathname = usePathname()

  const items = getMainNav(pathname)
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-6 lg:gap-10">
        {items.map(item => (
          <li key={item.title}>
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium text-foreground/75 transition-colors duration-200 before:absolute before:-bottom-1 before:left-0 before:h-px before:w-full before:scale-x-0 before:bg-foreground before:transition-transform before:content-[''] hover:text-foreground hover:before:scale-x-100",
                {
                  "text-foreground": item.active
                }
              )}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
