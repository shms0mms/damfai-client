import type { Metadata } from "next"
import localFont from "next/font/local"
import {Didact_Gothic} from 'next/font/google'
import { ReactQueryProvider } from "@/components/react-query-provider"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { config } from "@/config"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",

})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",

})

const didactGothic = Didact_Gothic({
  weight: ['400',],
 variable: '--font-didact-gothic',
 subsets: ['latin', 'cyrillic'],

})

export const metadata: Metadata = {
  title: config.name,
  description: config.description
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${didactGothic.variable} ${geistMono.variable} ${geistSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
