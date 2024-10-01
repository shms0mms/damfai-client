import type { Book } from "@/types/book"
import { axiosDefault, axiosWithAuth } from "@/api/interceptors"

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
    const response = await axiosDefault.get<GetAllGanresResponse>(
      `${this.BASE_URL}/ganres/all`
    )
    return response.data.map(r => r.ganre)
  }
  async getAll(options: GetAllBooksOptions) {
    const queryParams = new URLSearchParams({
      page: `${options.page}`,
      size: `${options.size}`,
      ...options.filters
    }).toString()

    const response = await axiosWithAuth.post<GetAllBooksResponse>(
      `${this.BASE_URL}?${queryParams}`,
      [0]
    )
    return response.data
  }
}

export const bookService = new BookService()
