import type { Metadata } from "next"
import { Didact_Gothic } from "next/font/google"
import localFont from "next/font/local"
import { PropsWithChildren } from "react"
import { siteConfig } from "@/config/site.config"
import "./globals.css"
import { Providers } from "./providers"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
})

const didactGothic = Didact_Gothic({
  weight: ["400"],
  variable: "--font-didact-gothic",
  subsets: ["latin", "cyrillic"]
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description
}

export default function RootLayout({
  children,
  modal
}: PropsWithChildren<{ modal: React.ReactNode }>) {
  console.log(modal)
  return (
    <html lang="en">
      <body
        className={`${didactGothic.variable} ${geistMono.variable} ${geistSans.variable} antialiased`}
      >
        <Providers>
          {children}
          {modal}
        </Providers>
      </body>
    </html>
  )
}
