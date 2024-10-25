import Link from "next/link"

type LogoProps = {
  size?: number
}

export function PrettifyLogo({ size = 280 }: LogoProps) {
  return (
    <>
      <Link href={"/prettify"} className="">
        <img
          src={"/prettify-white.png"}
          alt={"damfai-prettify"}
          width={size}
          height={size}
          className="hidden dark:block"
        />
        <img
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
