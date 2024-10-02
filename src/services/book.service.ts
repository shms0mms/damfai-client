import type { Book } from "@/types/book"
import { randomNumber } from "@/lib/utils"

type GetAllGanresResponse = {
  id: number
  ganre: string
}[]

type GetAllBooksResponse = {
  items: Book[]
  total: number
  page: number
  size: number
  pages: number
}
type GetAllBooksOptions = {
  page: number
  size: number
  filters?: Record<string, string>
}

const mockGanres = ["Фэнтези", "Романтика", "Психологическое"]

class BookService {
  private BASE_URL = "/books"
  async getAllGanres() {
    const response = await new Promise<GetAllGanresResponse>(res =>
      res([{ id: 1, ganre: "Фэнтези" }])
    )
    return response.map(r => r.ganre)
  }
  async getById(id: number) {
    return new Promise<Book>(res =>
      res({
        id,
        title: `Книга ${id}`,
        desc: "Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem",
        writen_date: new Date(),
        ratings: Math.random() * 5,
        ganres: [mockGanres[randomNumber(0, mockGanres.length - 1)]],
        author: "Иван Иванов",
        chapters: randomNumber(10, 100)
      })
    )
  }
  async getAll(options: GetAllBooksOptions) {
    // const queryParams = new URLSearchParams({
    //   page: `${options.page}`,
    //   size: `${options.size}`,
    //   ...options.filters
    // }).toString()

    return new Promise<GetAllBooksResponse>(res =>
      res({
        items: new Array(options?.size ? options.size : 100)
          .fill(1)
          .map<Book>((_, i) => ({
            id: i + 1,
            title: `Book ${i + 1}`,
            author: "John Doe",
            writen_date: new Date(),
            chapters: i * 100 + 1,
            desc: `Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem`,

            ratings: Math.random() * 5,

            ganres: [mockGanres[randomNumber(0, mockGanres.length - 1)]]
          })),

        total: options?.size ?? 100 * 10,
        page: options?.page ?? 0,
        size: options?.size ?? 10,
        pages: options?.size ?? (100 * 10) / (options?.size ?? 10)
      })
    )
    // const response = await axiosDefault.post<GetAllBooksResponse>(
    //   `${this.BASE_URL}?${queryParams}`,
    //   [0]
    // )
    // return response.data
  }
  async startReading(options: { id: number; dates: [Date, Date] }) {
    return true
  }
}

export const bookService = new BookService()
