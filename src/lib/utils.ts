import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

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
