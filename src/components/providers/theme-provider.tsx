"use client"

import { useQuery } from "@tanstack/react-query"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { createContext, useState } from "react"
import { CustomizeThemeFormSchema } from "@/components/blocks/customize-theme"
import { COLOR_THEMES, THEMES } from "@/lib/constants"
import { getCustomThemeVariables } from "@/lib/utils"
import { userService } from "@/services/user.service"

type TCustomThemeContext = {
  setVariables: React.Dispatch<
    React.SetStateAction<CustomizeThemeFormSchema["variables"]>
  >
  variables: CustomizeThemeFormSchema["variables"] | undefined
  isActive: boolean
}

type TColorThemeContext = {
  colorTheme: (typeof COLOR_THEMES)[number] | undefined
  setColorTheme: React.Dispatch<
    React.SetStateAction<(typeof COLOR_THEMES)[number] | undefined>
  >
}

export const CustomThemeContext = createContext<TCustomThemeContext>({
  setVariables: () => {},
  variables: undefined,
  isActive: false
})

export const ColorThemeContext = createContext<TColorThemeContext>({
  colorTheme: undefined,
  setColorTheme: () => {}
})

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider themes={THEMES} {...props}>
      <ColorThemeProvider>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </ColorThemeProvider>
    </NextThemesProvider>
  )
}

function ColorThemeProvider({ children }: React.PropsWithChildren) {
  const colorThemeIdFromLocalStorage = +(
    (typeof window !== "undefined" && localStorage.getItem("colorTheme")) ??
    -1
  )

  const { data: userThemes } = useQuery({
    initialData: undefined,
    queryKey: ["user", "theme"],
    queryFn: userService.getUserThemes
  })

  const hasAccessToCustomTheme = userThemes?.some(
    theme => theme.id === colorThemeIdFromLocalStorage
  )

  const [colorTheme, setColorTheme] = useState<
    (typeof COLOR_THEMES)[number] | undefined
  >(
    hasAccessToCustomTheme
      ? userThemes?.find(theme => theme.id === colorThemeIdFromLocalStorage)
          ?.key
      : undefined
  )

  return (
    <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ColorThemeContext.Provider>
  )
}

function CustomThemeProvider({ children }: React.PropsWithChildren) {
  const { theme } = useTheme()
  const [variables, setVariables] = useState<
    CustomizeThemeFormSchema["variables"]
  >(typeof window === "undefined" ? [] : getCustomThemeVariables())

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
    variable => `--${variable.key}: ${variable.value} !important;\n`
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
