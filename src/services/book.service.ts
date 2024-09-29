import type { Book, BooksFilters } from "@/types/book"

type GetAllBooksResponse = {
  books: Book[]
  total: number
}
type GetAllBooksOptions = {
  page?: number
  perPage?: number
  filters?: BooksFilters
}

class BookService {
  private BASE_URL = "/books"
  async getAll(options?: GetAllBooksOptions): Promise<GetAllBooksResponse> {
    return new Promise(res =>
      res({
        books: [
          {
            id: 1,
            title: "Book 1",
            author: "Author 1",
            desc: "Description 1",
            chapters: 101,
            ratings: 5.0
          }
        ],
        total: 100
      })
    )
  }
}

export const bookService = new BookService()
