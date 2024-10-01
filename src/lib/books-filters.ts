import { bookService } from "@/services/book.service"

export type BookFilter = {
  id: string
  label: string
} & (
  | { type: "number-range"; maxValue: number; minValue: number }
  | {
      type: "enum"
      options: string[]
    }
  | {
      type: "string"
      defaultValue?: string
    }
)
export type MinValue = number
export type MaxValue = number
export type RangeValue = [MinValue, MaxValue]

export const getBooksFilter = async (): Promise<BookFilter[]> => {
  const ganres = await bookService.getAllGanres()

  return [
    {
      id: "title",
      label: "Название",
      type: "string"
    },
    {
      id: "author",
      label: "Автор",
      type: "string"
    },
    {
      id: "rating",
      label: "Рейтинг",
      type: "number-range",
      minValue: 0.0,
      maxValue: 5.0
    },
    {
      id: "ganre",
      label: "Жанр",
      type: "enum",
      options: ganres
    }
  ]
}
