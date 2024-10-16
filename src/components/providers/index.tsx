"use client"

import { useHotkeys } from "@/hooks/useHotkeys"
import { useHotkeysActions } from "@/hooks/useHotkeysActions"
import { AuthProvider } from "@/components/providers/auth-profider"
import { ReactQueryProvider } from "@/components/providers/react-query-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Toaster } from "@/components/ui/sonner"

export function Providers({ children }: React.PropsWithChildren) {
  const { hotkeys } = useHotkeys()
  useHotkeysActions(hotkeys)

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <ReactQueryProvider>
        <AuthProvider>{children}</AuthProvider>
        <Toaster />
      </ReactQueryProvider>
    </ThemeProvider>
  )
}
