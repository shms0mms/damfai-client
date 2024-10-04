import { type FC } from "react"
import { Header } from "./header"

export const ReadBookLayout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="">{children}</div>
    </>
  )
}
