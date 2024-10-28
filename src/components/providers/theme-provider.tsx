"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { createContext, useContext, useEffect, useState } from "react"
import { CustomizeThemeFormSchema } from "@/components/blocks/customize-theme"
import { THEMES } from "@/lib/constants"
import { getCustomThemeVariables } from "@/lib/utils"
import { themeService } from "@/services/themes.service"
import { userService } from "@/services/user.service"

type TCustomThemeContext = {
  setVariables: React.Dispatch<
    React.SetStateAction<CustomizeThemeFormSchema["variables"]>
  >
  variables: CustomizeThemeFormSchema["variables"] | undefined
  isActive: boolean
}

type ColorThemeId = number
type TColorThemeContext = {
  colorThemeIdLoading: ColorThemeId | undefined
  colorThemeKey: string | undefined
  removeColorTheme: () => void
  setColorTheme: (colorThemeId: ColorThemeId) => void
}

export const CustomThemeContext = createContext<TCustomThemeContext>({
  setVariables: () => {},
  variables: undefined,
  isActive: false
})

export const ColorThemeContext = createContext<TColorThemeContext>({
  colorThemeIdLoading: undefined,
  colorThemeKey: undefined,
  removeColorTheme: () => {},
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
  const queryClient = useQueryClient()

  const colorThemeIdFromLocalStorage =
    typeof localStorage === "undefined"
      ? -1
      : +(localStorage.getItem("colorThemeId") ?? -1)

  const { data: userThemes } = useQuery({
    initialData: undefined,
    queryKey: ["user", "theme"],
    queryFn: userService.getUserThemes,
    enabled: colorThemeIdFromLocalStorage !== -1
  })

  const [colorThemeKey, setColorThemeKey] = useState<string | undefined>(
    userThemes?.find(theme => theme.id === colorThemeIdFromLocalStorage)?.key
  )
  const [colorThemeId, setColorThemeId] = useState<ColorThemeId>(
    colorThemeIdFromLocalStorage
  )

  const {
    data: colorTheme,
    refetch: refetchColorTheme,
    isLoading: isLoadingColorTheme
  } = useQuery({
    initialData: undefined,
    queryKey: ["theme", colorThemeId],
    queryFn: () => themeService.getById(colorThemeId),
    enabled: colorThemeId !== -1
  })

  const setColorTheme = (colorThemeId: number) => {
    const colorThemeKey = userThemes?.find(
      theme => theme.id === colorThemeId
    )?.key

    setColorThemeKey(colorThemeKey)
    setColorThemeId(colorThemeId)

    queryClient.refetchQueries({
      queryKey: ["theme", colorThemeId]
    })

    localStorage.setItem("colorThemeId", `${colorThemeId}`)
  }

  const removeColorTheme = () => {
    document.querySelector(`.styles-${colorThemeKey}`)
    localStorage.removeItem("colorThemeId")

    setColorThemeKey(undefined)
  }

  // change color theme visualy
  useEffect(() => {
    if (colorTheme && !isLoadingColorTheme) {
      setColorThemeId(colorTheme.id)

      document.documentElement.classList.add(colorTheme.key)

      const styles = document.createElement("style")
      styles.innerHTML = `
:root.${colorTheme.key} {
  ${Object.entries(colorTheme.light)
    .map(
      ([key, value]) => `
    --${key}: ${value};`
    )
    .join("")}
}
:root.dark.${colorTheme.key} { 
  ${Object.entries(colorTheme.dark)
    .map(
      ([key, value]) => `
    --${key}: ${value};`
    )
    .join("")}
}
      `
      styles.id = `styles-${colorTheme.key}`

      document.head.appendChild(styles)
    }
  }, [colorTheme, isLoadingColorTheme])

  return (
    <ColorThemeContext.Provider
      value={{
        colorThemeIdLoading: isLoadingColorTheme
          ? colorThemeIdFromLocalStorage
          : undefined,
        colorThemeKey,
        removeColorTheme,
        setColorTheme
      }}
    >
      {children}
    </ColorThemeContext.Provider>
  )
}

function CustomThemeProvider({ children }: React.PropsWithChildren) {
  const { colorThemeKey } = useContext(ColorThemeContext)
  const [variables, setVariables] = useState<
    CustomizeThemeFormSchema["variables"]
  >(typeof window === "undefined" ? [] : getCustomThemeVariables())

  const isActive = !!(colorThemeKey === "custom" && variables.length)

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
