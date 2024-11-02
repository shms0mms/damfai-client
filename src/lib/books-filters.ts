import { bookService } from "@/services/book.service"

export type BookFilter = {
  id: string
  label: string
} & (
  | { type: "number-range"; maxValue: number; minValue: number }
  | {
      type: "enum"
      options:
        | string[]
        | {
            id: number
            value: string
          }[]
    }
  | {
      type: "string"
      defaultValue?: string
    }
)
export type MinValue = number
export type MaxValue = number
export type RangeValue = [MinValue, MaxValue]

export const getBooksFilters = async (): Promise<BookFilter[]> => {
  const ganres = await bookService.getAllGanres()

  return [
    {
      id: "size",
      label: "Количество книг для получения",
      type: "enum",
      options: ["4", "12", "25", "32", "50"]
    },
    {
      id: "title__like",
      label: "Название",
      type: "string"
    },
    {
      id: "author__like",
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
      options: ganres.map(ganre => ({
        id: ganre.id,
        value: ganre.ganre
      }))
    }
  ]
}
