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

export type GraphPagesPerWeek = {
  start_date: Date
  end_date: Date
  Monday: number
  Tuesday: number
  Wednesday: number
  Thursday: number
  Friday: number
  Saturday: number
  Sunday: number
}
export type GraphMinutesPerWeek = {
  start_date: Date
  end_date: Date
  Monday: number
  Tuesday: number
  Wednesday: number
  Thursday: number
  Friday: number
  Saturday: number
  Sunday: number
}
export type GraphBooksPerYear = {
  January: number
  February: number
  March: number
  April: number
  May: number
  June: number
  July: number
  August: number
  September: number
  October: number
  November: number
  December: number
}

export type Graph = {
  PagesPerWeek: GraphPagesPerWeek
  MinutesPerWeek: GraphMinutesPerWeek
  BooksPerYear: GraphBooksPerYear
}
