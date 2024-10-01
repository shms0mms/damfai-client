import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { type BooksFilters } from "@/types/book"

export function useFiltersFromParams() {
  const filtersAsParams = useSearchParams()
  const [filters, setFilters] = useState<BooksFilters>({})

  useEffect(() => {
    const filtersAsMatrix = Object.fromEntries(filtersAsParams)
		for (const [key, value] of Object.entries(filtersAsMatrix)) {
			

    setFilters(filtersAsMatrix)
  }, [filtersAsParams])

  return filters
}
