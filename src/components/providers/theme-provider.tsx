"use client"

import { useMutation, useQuery } from "@tanstack/react-query"
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

type TColorThemeContext = {
  colorTheme: string | undefined
  removeColorTheme: () => void
  setColorTheme: (colorThemeId: number) => void
}

export const CustomThemeContext = createContext<TCustomThemeContext>({
  setVariables: () => {},
  variables: undefined,
  isActive: false
})

export const ColorThemeContext = createContext<TColorThemeContext>({
  colorTheme: undefined,
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

  const colorThemeKey = userThemes?.find(
    theme => theme.id === colorThemeIdFromLocalStorage
  )?.key

  const [colorTheme, _setColorTheme] = useState<string | undefined>(
    colorThemeKey
  )
  const {
    data,
    mutate: getColorTheme,
    isPending: isPendingTheme
  } = useMutation({
    mutationKey: ["theme", colorThemeKey],
    mutationFn: (id: number) => themeService.getById(id)
  })

  const setColorTheme = (colorThemeId: number) => {
    _setColorTheme(colorTheme)
    getColorTheme(colorThemeId)
    localStorage.setItem("colorThemeId", `${colorThemeId}`)
  }

  const removeColorTheme = () => {
    _setColorTheme(undefined)
    localStorage.removeItem("colorThemeId")
  }

  // change color theme visualy
  useEffect(() => {
    console.log(data, isPendingTheme)
    if (data && !isPendingTheme) {
      document.documentElement.classList.add(data.key)

      const styles = document.createElement("style")
      styles.innerHTML = `
:root.emerald {
  ${Object.entries(data.light)
    .map(
      ([key, value]) => `
    --${key}: ${value};`
    )
    .join("")}
}
:root.dark.emerald { 
  ${Object.entries(data.dark)
    .map(
      ([key, value]) => `
    --${key}: ${value};`
    )
    .join("")}
}
      `

      document.head.appendChild(styles)
    }
  }, [data, isPendingTheme])

  return (
    <ColorThemeContext.Provider
      value={{ colorTheme, removeColorTheme, setColorTheme }}
    >
      {children}
    </ColorThemeContext.Provider>
  )
}

function CustomThemeProvider({ children }: React.PropsWithChildren) {
  const { colorTheme } = useContext(ColorThemeContext)
  const [variables, setVariables] = useState<
    CustomizeThemeFormSchema["variables"]
  >(typeof window === "undefined" ? [] : getCustomThemeVariables())

  const isActive = !!(colorTheme === "custom" && variables.length)

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
