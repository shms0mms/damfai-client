"use client"

import { type FC, type PropsWithChildren } from "react"
import { Footer } from "./footer"
import { Header } from "./header"

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative flex h-full flex-col">
      <Header />
      <main className="flex-[1_1_auto]">{children}</main>
      <Footer />
    </div>
  )
}
