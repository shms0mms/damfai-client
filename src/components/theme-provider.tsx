"use client"

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import Head from "next/head"
import { createContext, useState } from "react"
import { CustomizeThemeFormSchema } from "./blocks/customize-theme"
import { THEMES } from "@/lib/constants"
import { getCustomThemeVariables } from "@/lib/utils"

type TCustomThemeContext = {
  setVariables: React.Dispatch<
    React.SetStateAction<CustomizeThemeFormSchema["variables"]>
  >
  variables: CustomizeThemeFormSchema["variables"] | undefined
  isActive: boolean
}

export const CustomThemeContext = createContext<TCustomThemeContext>({
  setVariables: () => {},
  variables: undefined,
  isActive: false
})

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <>
      <NextThemesProvider themes={THEMES} {...props}>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </NextThemesProvider>
    </>
  )
}

function CustomThemeProvider({ children }: React.PropsWithChildren) {
  const { theme } = useTheme()
  const [variables, setVariables] = useState<
    CustomizeThemeFormSchema["variables"]
  >(getCustomThemeVariables())

  const isActive = !!(theme === "custom" && variables.length)

  return (
    <CustomThemeContext.Provider
      value={{
        setVariables,
        variables,
        isActive
      }}
    >
      {variables.length && isActive ? (
        <>
          <style>
            {`
.custom-theme-wrapper {
  ${variables.map(
    (variable, i) => `--${variable.key}: ${variable.value} !important;\n`
  )}
`}
          </style>
          <div className="custom-theme-wrapper bg-background text-foreground">
            {children}
          </div>
        </>
      ) : (
        children
      )}
    </CustomThemeContext.Provider>
  )
}
