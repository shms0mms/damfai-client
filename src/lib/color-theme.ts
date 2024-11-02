import { Theme } from "@/types/shop"

export const generateStylesFromColorTheme = (theme: Theme): string => {
  const styles = `
:root.dark.${theme.key} { 
  ${Object.entries(theme.dark)
    .map(
      ([key, value]) => `
    --${key}: ${value};`
    )
    .join("")}
}
:root.${theme.key} {
  ${Object.entries(theme.light)
    .map(
      ([key, value]) => `
    --${key}: ${value};`
    )
    .join("")}
}
	`
  return styles
}
