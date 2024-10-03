import { RangeValue } from "@/lib/books-filters"

export type Book = {
  id: number
  title: string // can be filtered
  author: string // can be filtered
  desc: string
  image?: string
  writen_date?: Date
  chapters: number
  ratings: number // float, can be filtered
  ganres: string[]
}
export type Chapter = {
  id: number
  title: string
  numberOfChapter: number
  pages: number
}
export type Page = { id: number; numberOfPage: number; text: string }

export type BooksFilters = Record<string, string | RangeValue>
