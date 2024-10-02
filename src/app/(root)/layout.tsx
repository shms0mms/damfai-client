import { type PropsWithChildren } from "react"
import { RootLayout } from "@/components/layouts/root"

export default function Layout({ children }: PropsWithChildren) {
  return <RootLayout>{children}</RootLayout>
}
