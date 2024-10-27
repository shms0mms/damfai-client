"use client"

import { AuthProvider } from "@/components/providers/auth-provider"
import { ReactQueryProvider } from "@/components/providers/react-query-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { HotkeysProvider } from "./hotkeys-provider"

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <ThemeProvider attribute="class" defaultTheme="light">
          <HotkeysProvider>
            {children}
            <Toaster />
          </HotkeysProvider>
        </ThemeProvider>
      </AuthProvider>
    </ReactQueryProvider>
  )
}
