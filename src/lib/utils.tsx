import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { CustomizeThemeFormSchema } from "@/components/blocks/customize-theme"
import { Coin } from "@/components/ui/coin"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function randomNumber(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getMaxKey = (o: object) =>
  Object.keys(o).length
    ? Object.entries(o).reduce((r, e) => (e[1] > r[1] ? e : r))[0]
    : null

export const padStart = (date: number) => {
  return date.toString().length < 2 ? date.toString().padStart(2, "0") : date
}
export const toPrice = (price: number) =>
  price
    ? `${new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB"
      })
        .format(price)
        .replace("₽", "")}С`
    : "Бесплатно"

export const toCoins = (balance: number, className?: string) => {
  const coins = `${new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB"
  })
    .format(balance || 0)
    .replace("₽", "")}`
  return (
    <span className={cn("flex items-center gap-0.5", className)}>
      {coins} <Coin />
    </span>
  )
}
export const hexToHsl = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1]!, 16)} ${parseInt(result[2]!, 16)}% ${parseInt(
        result[3]!,
        16
      )}%`
    : null
}

export function getCustomThemeVariables(): CustomizeThemeFormSchema["variables"] {
  const variables = localStorage.getItem("customThemeVariables")
  if (!variables) return []
  try {
    return JSON.parse(variables)
  } catch {
    return []
  }
}
