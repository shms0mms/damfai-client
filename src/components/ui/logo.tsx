import Image from "next/image"
import Link from "next/link"
import { ROUTES } from "@/config/route.config"
import { siteConfig } from "@/config/site.config"

export default function Logo() {
  const size = 130
  return (
    <>
      <Link href={ROUTES.HOME} className="">
        <img
          src={"/logo-white.png"}
          alt={siteConfig.name}
          width={size}
          height={size}
          className="hidden dark:block"
        />{" "}
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
