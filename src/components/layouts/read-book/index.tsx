import { type FC } from "react"
import { Chappi } from "@/components/read-book/chappi"
import { Header } from "./header"

export const ReadBookLayout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />

      <div className="h-full w-full">{children}</div>
      <div className="hidden 2xl:block">
        <Chappi />
      </div>
    </>
  )
}
