import { DashboardIcon } from "@radix-ui/react-icons"
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
    },
    {
      icon: <DashboardIcon width={20} height={20} />,
      title: "Личный Кабинет",
      href: "/dashboard",
      active: pathname.startsWith("/dashboard")
    }
  ]
}
