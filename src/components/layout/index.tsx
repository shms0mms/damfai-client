import { type FC, type PropsWithChildren } from "react"
import { Footer } from "./footer"
import { Header } from "./header"

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
