"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { THEMES } from "@/lib/constants"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider themes={THEMES} {...props}>
      {children}
    </NextThemesProvider>
  )
}
