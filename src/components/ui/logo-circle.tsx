import Image from "next/image"
import Link from "next/link"
import { ButtonHTMLAttributes } from "react"
import { ROUTES } from "@/config/route.config"
import { siteConfig } from "@/config/site.config"

type LogoProps = {
  size?: number
}

export default function LogoCircle({
  size = 130,
  ...buttonProps
}: LogoProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" {...buttonProps}>
      <Image
        src={"/chappi-white.png"}
        alt={siteConfig.name}
        width={size}
        height={size}
        className="hidden dark:block"
      />
      <Image
        src={"/chappi-black.png"}
        alt={siteConfig.name}
        width={size}
        height={size}
        className="dark:hidden"
      />
    </button>
  )
}
