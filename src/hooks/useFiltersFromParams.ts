import { useSearchParams } from "next/navigation"
import { type BooksFilters } from "@/types/book"

function addValueToRangeFilter(options: {
  filters: BooksFilters
  key: string
  value: string
  suffix: "lte" | "gte"
}) {
  const { filters, key, value, suffix } = options
  if (Array.isArray(filters[key])) {
    if (suffix === "lte") {
      // removes -1 from the end of the array
      filters[key].pop()
      filters[key].push(+value)
    } else {
      filters[key] = [+value, -1]
    }
  }
}
export function useFiltersFromParams() {
  const filtersAsParams = useSearchParams()

  const filters = Object.fromEntries(filtersAsParams)
  const processedFilters: BooksFilters = {}

  for (const [key, value] of Object.entries(filters)) {
    if (key.endsWith("__lte") || key.endsWith("__gte")) {
      const [keyWithoutSuffix, suffix] = key.split("__") as [
        string,
        "lte" | "gte"
      ]
      const options = {
        filters: processedFilters,
        key: keyWithoutSuffix,
        value,
        suffix
      }
      if (Array.isArray(processedFilters[keyWithoutSuffix])) {
        addValueToRangeFilter(options)
      } else {
        processedFilters[keyWithoutSuffix] = [+value, -1]
        addValueToRangeFilter(options)
      }
    } else processedFilters[key] = value
  }
  return processedFilters
}
