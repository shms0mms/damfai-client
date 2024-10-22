import {
  Book,
  GalleryVerticalEnd,
  Gauge,
  Home,
  ShoppingCart
} from "lucide-react"

type NavItem = {
  icon: React.ReactNode
  title: string
  href: string
  active: boolean
  className?: string
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
      icon: <GalleryVerticalEnd />,
      title: "Каталог",
      href: "/catalog",
      active: pathname.startsWith("/catalog")
    },
    {
      icon: <Gauge width={20} height={20} />,
      title: "Гонка",
      href: "/race",
      active: pathname.startsWith("/dashboard")
    },
    {
      icon: <ShoppingCart width={20} height={20} />,
      title: "Магазин",
      href: "/shop",
      active: pathname.startsWith("/shop")
    }
  ]
}
