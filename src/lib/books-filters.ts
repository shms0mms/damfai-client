type BookFilter = {
  label: string
} & (
  | { type: "number-range"; defaultValue: number }
  | {
      type: "enum"
      defaultValue?: string
    }
  | {
      type: "string"
      defaultValue?: string
    }
)

export const booksFilter: BookFilter[] = [
  {
    label: "Название",
    type: "string"
  }
]
