import { type Book, type Chapter, type Page } from "@/types/book"
import { axiosDefault, axiosWithAuth } from "@/api/interceptors"
import { readBookService } from "./read-book.service"

type GetAllGanresResponse = {
  id: number
  ganre: string
}[]

type GetAllChaptersResponse = {
  title: string
  author: string
  chapters: Chapter[]
}

class BookService {
  private BASE_URL = "/books"

  async getAllGanres() {
    const response = await new Promise<GetAllGanresResponse>(res =>
      res([{ id: 1, ganre: "Фэнтези" }])
    )
    return response.map(r => r.ganre)
  }
  async getById(id: number) {
    try {
      const data = (
        await axiosDefault.get<Book>(`${this.BASE_URL}/get/book/${id}`)
      ).data

      return data
    } catch {
      return null
    }
  }

  async getUserBooks() {
    return (await readBookService.getAll()).data
  }

  async getAllChapters(id: number) {
    return (
      await axiosDefault.get<GetAllChaptersResponse>(
        `${this.BASE_URL}/get/book/chapters/${id}`
      )
    ).data
  }
  async getPagesByChapterId(options: {
    chapterId: number
    page: number
    size: number
    bookId: number
  }) {
    const response = (
      await axiosWithAuth.get<Page>(
        `${this.BASE_URL}/get_pages_by_chapter/${options.chapterId}?page=${options.page}&size=1&id_book=${options.bookId}`
      )
    ).data

    return response
  }
}

export const bookService = new BookService()
