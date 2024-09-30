export type BookFilter = {
  id: string
  label: string
} & (
  | { type: "number-range"; defaultValue: number }
  | {
      type: "enum"
      options: string[]
    }
  | {
      type: "string"
      defaultValue?: string
    }
)

export const getBooksFilter = async (): Promise<BookFilter[]> => {
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
      defaultValue: 0
    },
    {
      id: "ganre",
      label: "Жанр",
      type: "enum",
      options: ["Фантастика", "Детектив", "Роман", "Научпоп"]
    }
  ]
}
