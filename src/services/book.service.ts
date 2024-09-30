import type { Book, BooksFilters } from "@/types/book"
import { randomNumber } from "@/lib/utils"

type GetAllBooksResponse = {
  items: Book[]
  total: number
}
type GetAllBooksOptions = {
  page?: number
  perPage?: number
  filters?: BooksFilters
}

const mockGanres = ["Фэнтези", "Романтика", "Психологическое"]

class BookService {
  private BASE_URL = "/books"
  async getAllGenres(): Promise<string[]> {
    return new Promise(res => res([]))
  }
  async getAll(options?: GetAllBooksOptions): Promise<GetAllBooksResponse> {
    return new Promise(res =>
      res({
        items: new Array(options?.perPage ? options.perPage : 100)
          .fill(1)
          .map<Book>((_, i) => ({
            id: i + 1,
            title: `Book ${i + 1}`,
            author: "John Doe",
            writen_date: new Date(),
            chapters: i * 100 + 1,
            desc: `Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem`,
            ratings: Math.random() * 5,
            ganres: [mockGanres[randomNumber(0, mockGanres.length - 1)]],
            image: "https://ir.ozone.ru/s3/multimedia-1-s/c1000/7039699840.jpg"
          })),
        total: 100
      })
    )
  }
}

export const bookService = new BookService()
