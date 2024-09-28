type NavItem = {
  title: string
  href: string
  active: boolean
}

export const getMainNav = (pathname: string): NavItem[] => {
  return [
    {
      title: "Книги",
      href: "/books",
      active: pathname.startsWith("/books")
    }
  ]
}
