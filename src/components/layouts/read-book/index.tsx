import { type FC } from "react"
import { Chappi } from "@/components/read-book/chappi"
import { Header } from "./header"
import { MenuBar } from "./menu-bar"

export const ReadBookLayout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="">{children}</div>
      <MenuBar />
      <div className="hidden 2xl:block">
        <Chappi />
      </div>
    </>
  )
}
