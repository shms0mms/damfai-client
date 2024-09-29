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
        books: new Array(100).fill(1).map<Book>((_, i) => ({
          id: i + 1,
          title: `Book ${i + 1}`,
          author: "John Doe",
          writen_date: new Date(),
          chapters: i * 100 + 1,
          desc: `Description ${i + 1}`,
          ratings: Math.random() * 5
        })),
        total: 100
      })
    )
  }
}

export const bookService = new BookService()
