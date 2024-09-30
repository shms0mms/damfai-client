"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { ROUTES } from "@/config/route.config"
import { siteConfig } from "@/config/site.config"

export default function Logo() {
  const { theme } = useTheme()
  const src = theme !== "dark" ? "/logo-black.png" : "/logo-white.png"

  console.log(theme)
  return (
    <>
      <Link
        href={ROUTES.HOME}
        className="flex items-center gap-2 text-base lg:text-lg"
      >
        <Image
          src={src}
          alt={siteConfig.name}
          width={130}
          height={130}
          className="mt-1"
        />
      </Link>
    </>
  )
}
