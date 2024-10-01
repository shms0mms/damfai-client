import { type FC } from "react"

type BooksPaginationProps = {
  pagination: {
    total: number
    page: number
    size: number
    pages: number
  }
}

export const BooksPagination: FC<BooksPaginationProps> = ({ pagination }) => {
  return <div>BooksPagination</div>
}
