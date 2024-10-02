export type StatisticsItem = {
  title: string
  count: string | number
}

export type Statistics = {
  books_count: number // всего книг прочитанных
  pages_count: number // всего страниц прочитанных
  words_per_min: number // слов в минуту
  minutes_per_day: number // минут в день
  pages_per_month: number // страниц в месяц
  books_per_month: number // книг в месяц
}
export type GraphBooksPerMonths = {}
export type GraphPagesPerWeek = {}
export type GraphMinutesPerWeek = {}
export type GraphBooksPerYear = {}

export type Graph = {
  BooksPerMonths: GraphBooksPerMonths
  PagesPerWeek: GraphPagesPerWeek
  MinutesPerWeek: GraphMinutesPerWeek
  BooksPerYear: GraphBooksPerYear
}
