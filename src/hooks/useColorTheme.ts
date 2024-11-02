import { useEffect } from "react"
import { Theme } from "@/types/shop"
import { generateStylesFromColorTheme } from "@/lib/color-theme"

type UseColorTheme = {
  userThemes: Theme[] | undefined
  colorThemeId: number
  setColorThemeId: React.Dispatch<React.SetStateAction<number>>
  colorTheme: Theme | undefined
  isLoadingColorTheme: boolean
}

export const useColorTheme = (options: UseColorTheme) => {
  const {
    userThemes,
    isLoadingColorTheme,
    colorThemeId,
    setColorThemeId,
    colorTheme
  } = options
  useEffect(() => {
    const hasAccessToTheme = userThemes?.some(
      theme => theme.id === colorThemeId
    )

    if (hasAccessToTheme && colorTheme && !isLoadingColorTheme) {
      setColorThemeId(colorTheme.id)

      document.documentElement.classList.add(colorTheme.key)

      const styles = document.createElement("style")
      styles.innerHTML = generateStylesFromColorTheme(colorTheme)
      styles.id = `styles-${colorTheme.key}`

      document.head.appendChild(styles)
    }
  }, [userThemes, colorTheme, isLoadingColorTheme])
}
