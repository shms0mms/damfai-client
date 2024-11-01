"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

export const useCustomSearchParams = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateSearchParams = useCallback(
    (newParams: Record<string, string>) => {
      const currentParams = new URLSearchParams(searchParams)

      // Добавляем новые параметры или обновляем существующие
      Object.keys(newParams).forEach(key => {
        const value = newParams[key]
        if (value === null || value === undefined) {
          currentParams.delete(key)
        } else {
          currentParams.set(key, value)
        }
      })

      router.push(`?${currentParams.toString()}`)
    },
    [router, searchParams]
  )

  return { searchParams, updateSearchParams }
}
