import type { FC, PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

type MainTitleProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const MainTitle: FC<PropsWithChildren<MainTitleProps>> = ({
  children,
  className
}) => {
  return (
    <h1
      className={cn(
        "mb-16 text-4xl font-bold md:mb-24 md:text-5xl lg:text-6xl",
        className
      )}
    >
      {children}
    </h1>
  )
}
