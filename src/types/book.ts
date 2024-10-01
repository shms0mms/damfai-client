import { RangeValue } from "@/lib/books-filters"

export type Book = {
  id: number
  title: string // can be filtered
  author: string // can be filtered
  desc: string
  writen_date?: Date
  chapters: number
  ratings: number // float, can be filtered
  ganres: string[]
}

export type BooksFilters = Record<string, string | RangeValue>
