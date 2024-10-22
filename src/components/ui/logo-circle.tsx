import Image from "next/image"
import { HTMLAttributes } from "react"
import { siteConfig } from "@/config/site.config"

type LogoProps = {
  size?: number
}

export function LogoCircle({
  size = 130,
  ...divProps
}: LogoProps & HTMLAttributes<HTMLElement>) {
  return (
    <div {...divProps}>
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
    </div>
  )
}
