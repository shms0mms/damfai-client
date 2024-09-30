"use client"

import { useQuery } from "@tanstack/react-query"
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
import { type BookFilter, getBooksFilter } from "@/lib/books-filters"

function BooksFiltersComponent() {
  const { data: booksFilters } = useQuery({
    initialData: undefined,
    queryKey: ["book-filters"],
    queryFn: getBooksFilter
  })
  const [filters, setFilters] = useState<BooksFilters>({})

  const onSubmit = () => {
    const filtersAsMatrix = Object.entries(filters).map(([key, value]) => [
      key,
      value.toString()
    ])
    console.log(new URLSearchParams(filtersAsMatrix).toString())
  }

  const handleFilterChange = (
    key: keyof BooksFilters,
    value: string | number
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
          <div key={filter.label} className="space-y-2">
            <Label>{filter.label}</Label>
            <Slider
              min={0}
              max={5}
              step={0.1}
              value={[filter.defaultValue]}
              onValueChange={([value]) => handleFilterChange(filter.id, value)}
            />
            <div className="text-sm text-muted-foreground">
              {(filters[filter.id] as number) || filter.defaultValue}
            </div>
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
                <Skeleton className="h-4 w-14"></Skeleton>
                <Skeleton className="h-10 w-full" />
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
          <SheetContent>
            <SheetHeader>
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
