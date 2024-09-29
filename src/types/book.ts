export type Book = {
  id: number
  title: string
  author: string
  desc: string
  writen_date?: Date
  chapters: number
  ratings: number // float
}

export type BooksFilters = {}
