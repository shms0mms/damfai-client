import Image from "next/image"
import Link from "next/link"

type LogoProps = {
  size?: number
}

export function PrettifyLogo({ size = 280 }: LogoProps) {
  return (
    <>
      <Link href={"/prettify"} className="">
        <Image
          src={"/prettify-white.png"}
          alt={"damfai-prettify"}
          width={size}
          height={size}
          className="hidden dark:block"
        />
        <Image
          src={"/prettify-black.png"}
          alt={"damfai-prettify"}
          width={size}
          height={size}
          className="dark:hidden"
        />
      </Link>
    </>
  )
}
