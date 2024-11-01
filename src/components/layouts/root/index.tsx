"use client"

import { type FC, type PropsWithChildren } from "react"
import { MoodProvider } from "@/components/providers/mood-provider"
import { Footer } from "./footer"
import { Header } from "./header"

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MoodProvider>
      <div className="relative flex h-full flex-col">
        <Header />
        <div className="flex-[1_1_auto]">{children}</div>
        <Footer />
      </div>
    </MoodProvider>
  )
}
