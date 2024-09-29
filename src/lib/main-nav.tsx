import { Book, Home } from "lucide-react"

type NavItem = {
  icon: React.ReactNode
  title: string
  href: string
  active: boolean
}

export const getMainNav = (pathname: string): NavItem[] => {
  return [
    {
      icon: <Home />,
      title: "Главная",
      href: "/",
      active: pathname === "/"
    },
    {
      icon: <Book />,
      title: "Книги",
      href: "/books",
      active: pathname.startsWith("/books")
    }
  ]
}
