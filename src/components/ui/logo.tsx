import Link from "next/link"
import { ROUTES } from "@/config/route.config"
import { siteConfig } from "@/config/site.config"

type LogoProps = {
  size?: number
}

export function Logo({ size = 130 }: LogoProps) {
  return (
    <>
      <Link href={ROUTES.HOME} className="">
        <img
          src={"/logo-white.png"}
          alt={siteConfig.name}
          width={size}
          height={size}
          className="hidden dark:block"
        />
        <img
          src={"/logo-black.png"}
          alt={siteConfig.name}
          width={size}
          height={size}
          className="dark:hidden"
        />
      </Link>
    </>
  )
}
