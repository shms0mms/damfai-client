"use client"

import { AuthProvider } from "@/components/providers/auth-provider"
import { ReactQueryProvider } from "@/components/providers/react-query-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Toaster } from "@/components/ui/sonner"

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <Toaster />
        </ThemeProvider>
      </AuthProvider>
    </ReactQueryProvider>
  )
}
