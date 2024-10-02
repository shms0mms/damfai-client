"use client"

import AuthProvider from "@/providers/auth"
import { ReactQueryProvider } from "@/components/react-query-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <ReactQueryProvider>
        <AuthProvider>{children}</AuthProvider>
        <Toaster />
      </ReactQueryProvider>
    </ThemeProvider>
  )
}
