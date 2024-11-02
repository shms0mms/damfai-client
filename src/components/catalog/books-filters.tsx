"use client"

import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { BooksFilters } from "@/types/book"
import { useFiltersFromParams } from "@/hooks/useFiltersFromParams"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import {
  type BookFilter,
  RangeValue,
  getBooksFilters
} from "@/lib/books-filters"

function BooksFiltersComponent() {
  const { data: booksFilers, isLoading } = useQuery({
    initialData: undefined,
    queryKey: ["books", "filters"],
    queryFn: getBooksFilters
  })

  // Getting default filters from URL
  const defaultFilters = useFiltersFromParams()
  const [filters, setFilters] = useState<BooksFilters>(defaultFilters)

  const router = useRouter()

  const onSubmit = () => {
    const processedFilters: BooksFilters = structuredClone(filters)

    // Processing range values
    for (const [key, value] of Object.entries(processedFilters)) {
      if (Array.isArray(value)) {
        processedFilters[`${key}__gte`] = value[0].toString()
        processedFilters[`${key}__lte`] = value[1].toString()

        delete processedFilters[key]
      } else {
        processedFilters[key] = processedFilters[key]!.toString()
      }
    }
    const filtersAsMatrix = Object.entries(processedFilters).map(
      ([key, value]) => [key, value.toString()]
    )
    const searchParams = new URLSearchParams(filtersAsMatrix).toString()
    console.log(searchParams)
    router.push(`/catalog?${searchParams}`)
  }

  const handleFilterChange = (
    key: keyof BooksFilters,
    value: string | RangeValue
  ) => setFilters(prev => ({ ...prev, [key]: value }))

  const renderFilter = (filter: BookFilter) => {
    switch (filter.type) {
      case "string":
        return (
          <div key={filter.id} className="space-y-2">
            <Label htmlFor={filter.id}>{filter.label}</Label>
            <Input
              id={filter.id}
              value={(filters[filter.id] as string | undefined) ?? ""}
              onChange={e => handleFilterChange(filter.id, e.target.value)}
            />
          </div>
        )
      case "number-range":
        return (
          <div key={filter.label} className="mb-4 space-y-2">
            <Label>{filter.label}</Label>
            <Slider
              min={filter.minValue}
              max={filter.maxValue}
              step={0.1}
              value={filters[filter.id] as RangeValue}
              // @ts-expect-error adsfg
              onValueChange={value => handleFilterChange(filter.id, value)}
              minStepsBetweenThumbs={0.1}
            />
          </div>
        )
      case "enum":
        return (
          <div key={filter.label} className="space-y-2">
            <Label>{filter.label}</Label>
            <Select
              value={filters[filter.id] as string}
              onValueChange={value => handleFilterChange(filter.id, value)}
            >
              <SelectTrigger>
                <SelectValue
                  placeholder={`Выберите ${filter.label.toLowerCase()}`}
                />
              </SelectTrigger>
              <SelectContent>
                {filter.options.map(option => {
                  const key = typeof option === "string" ? option : option.id
                  const value =
                    typeof option === "string" ? option : `${option.id}`

                  return (
                    <SelectItem key={key} value={value}>
                      {typeof option === "string" ? option : option.value}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          </div>
        )
    }
  }

  const filterContent = (
    <div>
      <div className="flex flex-col gap-4">
        {!isLoading && booksFilers
          ? booksFilers.map(renderFilter)
          : Array.from({ length: 4 })
              .fill(null)
              .map((_, i) => (
                <div key={i} className="flex flex-col gap-[0.725rem]">
                  <Skeleton className="h-4 w-14" />
                  <Skeleton className="h-[2.3rem] w-full" />
                </div>
              ))}
        <Button onClick={onSubmit} className="mt-4 w-full">
          Применить
        </Button>
      </div>
    </div>
  )

  return (
    <>
      <Card className="sticky top-20 hidden lg:block">
        <CardHeader className="p-1.5">
          <CardTitle>Фильтрация книг</CardTitle>
          <CardDescription>
            Найдите книгу по вашим вкусам, импользуя фильтры ниже
          </CardDescription>
        </CardHeader>
        <CardContent className="p-1.5">{filterContent}</CardContent>
      </Card>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Фильтры</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="mb-4">
              <SheetTitle>Фильтрация книг</SheetTitle>
              <SheetDescription>
                Найдите книгу по вашим вкусам, импользуя фильтры ниже
              </SheetDescription>
            </SheetHeader>
            {filterContent}
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
export { BooksFiltersComponent as BooksFilters }
