"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { useReadBooksNavigation } from "@/lib/read-books-nav"

export const Header = () => {
  const navigation = useReadBooksNavigation()

  return (
    <header className="sticky left-0 top-0 z-20 w-full border-b py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-muted/25 dark:shadow-secondary">
      <div className="container flex items-center justify-between gap-4">
        <Logo />
        <nav>
          <ul className="flex items-center gap-2">
            {navigation.map(item => (
              <li key={item.id}>
                {"component" in item ? (
                  <item.component />
                ) : (
                  <Button variant="outline" size="icon" onClick={item.action}>
                    {item.icon}
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
