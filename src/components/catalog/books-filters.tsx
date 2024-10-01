"use client"

import { useQuery } from "@tanstack/react-query"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { BooksFilters } from "@/types/book"
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
  getBooksFilter
} from "@/lib/books-filters"

function BooksFiltersComponent() {
  const { data: booksFilters } = useQuery({
    initialData: undefined,
    queryKey: ["book-filters"],
    queryFn: getBooksFilter
  })
  const filtersAsParams = useSearchParams()
  const defaultFilters: BooksFilters = {}

  const [filters, setFilters] = useState<BooksFilters>({})
  const router = useRouter()

  const onSubmit = () => {
    const processedFilters: BooksFilters = structuredClone(filters)

    for (const [key, value] of Object.entries(processedFilters)) {
      if (Array.isArray(value)) {
        processedFilters[`${key}__gte`] = value[0].toString()
        processedFilters[`${key}__lte`] = value[1].toString()

        delete processedFilters[key]
      } else {
        processedFilters[key] = processedFilters[key].toString()
      }
    }
    const filtersAsMatrix = Object.entries(processedFilters).map(
      ([key, value]) => [key, value.toString()]
    )
    router.push(`/catalog?${new URLSearchParams(filtersAsMatrix).toString()}`)
  }

  const handleFilterChange = (
    key: keyof BooksFilters,
    value: string | RangeValue
  ) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
  }

  const renderFilter = (filter: BookFilter) => {
    switch (filter.type) {
      case "string":
        return (
          <div key={filter.id} className="space-y-2">
            <Label htmlFor={filter.id}>{filter.label}</Label>
            <Input
              id={filter.id}
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
              value={[filter.minValue, filter.maxValue]}
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
              value={filters[filter.id]?.toString()}
              onValueChange={value => handleFilterChange(filter.id, value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите жанр" />
              </SelectTrigger>
              <SelectContent>
                {filter.options.map(option => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )
    }
  }

  const filterContent = (
    <>
      <div className="flex flex-col gap-4">
        {booksFilters
          ? booksFilters.map(renderFilter)
          : new Array(4).fill(null).map((_, i) => (
              <div className="flex flex-col gap-[0.725rem]" key={i}>
                <Skeleton className="h-4 w-14" />
                <Skeleton className="h-[2.3rem] w-full" />
              </div>
            ))}
        <Button onClick={onSubmit} className="mt-4 w-full">
          Применить
        </Button>
      </div>
    </>
  )

  return (
    <div>
      <Card className="hidden md:block">
        <CardHeader>
          <CardTitle>Фильтрация книг</CardTitle>
          <CardDescription>
            найдите книгу по вашим вкусам, импользуя фильтры ниже
          </CardDescription>
        </CardHeader>
        <CardContent>{filterContent}</CardContent>
      </Card>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Фильтры</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="mb-4">
              <SheetTitle>Фильтры книг</SheetTitle>
              <SheetDescription>
                Настройте фильтры для поиска книг
              </SheetDescription>
            </SheetHeader>
            {filterContent}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
export { BooksFiltersComponent as BooksFilters }
