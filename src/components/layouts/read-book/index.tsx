import { type FC } from "react"
import { Header } from "./header"

export const ReadBookLayout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-var(--header-size))] bg-yellow-50/50">
        {children}
      </div>
    </>
  )
}
