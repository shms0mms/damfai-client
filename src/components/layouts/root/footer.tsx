"use client"

import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { PropsWithChildren } from "react"
import { useMediaQuery } from "usehooks-ts"
import { MEDIA } from "@/config/media.config"
import { ROUTES } from "@/config/route.config"
import { siteConfig } from "@/config/site.config"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { ThemeSwitcher } from "@/components/ui/theme-switcher"

type NavItemLinkProps = {
  href: string
  children: React.ReactNode
  linked?: boolean
}
type NavItemProps = {
  title: string
  items: NavItemLinkProps[]
}
const NavItemLinks = ({ items }: Pick<NavItemProps, "items">) => {
  return (
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
  )
}
const NavItemTrigger = ({ title }: Pick<NavItemProps, "title">) => {
  return <h2>{title}</h2>
}
const NavItemWrapper = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-3">{children}</div>
}

const NavItem = ({ title, items }: NavItemProps) => {
  return (
    <NavItemWrapper>
      <NavItemTrigger title={title} />
      <NavItemLinks items={items} />
    </NavItemWrapper>
  )
}

export const Footer = () => {
  const navItems: NavItemProps[] = [
    {
      title: "Продукты",
      items: [
        {
          children: "Model GigaChat",
          href: ROUTES.GIGA_CHAT,
          linked: true
        },
        {
          children: "GigaChain",
          href: ROUTES.GIGA_CHAIN,
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
  const isResponsive = useMediaQuery(MEDIA.md)
  return (
    <footer className="py-20 md:px-8">
      <div className="container py-4">
        <div className="flex flex-col items-end justify-between gap-4">
          <nav className="w-full">
            {isResponsive ? (
              <Accordion type="multiple">
                {navItems.map(i => (
                  <AccordionItem value={i.title} key={i.title}>
                    <AccordionTrigger>
                      <NavItemTrigger title={i.title} />
                    </AccordionTrigger>
                    <AccordionContent>
                      <NavItemLinks items={i.items} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="grid w-full grid-cols-8 gap-5">
                {navItems.map(i => (
                  <NavItem key={i.title} {...i} />
                ))}
              </div>
            )}
          </nav>
          <p className="flex items-center gap-2 text-balance text-right text-sm leading-loose text-muted-foreground md:text-left">
            Built by {siteConfig.author}.
            <ThemeSwitcher />
          </p>
        </div>
      </div>
    </footer>
  )
}
