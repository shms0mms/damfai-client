import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { ROUTES } from "@/config/route.config"
import { config } from "@/config"

interface NavItemLinkProps {
  href: string
  children: React.ReactNode
  linked?: boolean
}
interface NavItemProps {
  title: string
  items: NavItemLinkProps[]
}
export const NavItem = ({ title, items }: NavItemProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h2>{title}</h2>
      <ul className="flex flex-col gap-2">
        {items.map((i, pk) => (
          <li key={pk}>
            {" "}
            <Link
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground/60 transition-colors hover:text-foreground"
              href={i.href}
            >
              {i.children}
              {i?.linked && <ExternalLink size={14} />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export const Footer = () => {
  const navItems: NavItemProps[] = [
    {
      title: "Продукты",
      items: [
        {
          children: "Lama model",
          href: ROUTES.LAMA_MODEL,
          linked: true
        },
        {
          children: "v0",
          href: ROUTES.V0,
          linked: true
        },
        {
          children: "Figma",
          href: ROUTES.FIGMA,
          linked: true
        }
      ]
    },
    {
      title: "Ресурсы",
      items: [
        {
          children: "GitHub",
          href: ROUTES.GITHUB
        },
        {
          href: ROUTES.NEXT_JS,
          children: "Next.js"
        },
        {
          href: ROUTES.FAST_API,
          children: "FastAPI"
        }
      ]
    },
    {
      title: "Ссылки",
      items: [
        {
          children: "Главная",
          href: ROUTES.HOME
        },
        {
          href: ROUTES.DASHBOARD,
          children: "Личный кабинет"
        },
        {
          href: ROUTES.SIGN_IN,
          children: "Войти"
        }
      ]
    },
    {
      title: "Контакты",
      items: [
        {
          children: "Fesyse",
          href: ROUTES.CONTACTS.FESYSE
        },
        {
          href: ROUTES.CONTACTS.OLEG,
          children: "Олег"
        },
        {
          href: ROUTES.CONTACTS.DAMBEK,
          children: "Dambek"
        },
        {
          href: ROUTES.CONTACTS.MMS,
          children: "mms"
        }
      ]
    }
  ]
  return (
    <footer className="py-20 md:px-8">
      <div className="container py-4">
        <div className="flex flex-col items-end justify-between gap-4">
          <nav className="grid w-full grid-cols-8 gap-5">
            {navItems.map(i => (
              <NavItem key={i.title} {...i} />
            ))}
          </nav>
          <p className="text-balance text-right text-sm leading-loose text-muted-foreground md:text-left">
            Built by {config.author}.
          </p>
        </div>
      </div>
    </footer>
  )
}
