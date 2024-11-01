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

const mockGanres = [
  "Фэнтези",
  "Романтика",
  "Психологическое",
  "Вам может понравиться",
  "Затягивает с первой главы",
  "Суперхиты",
  "Комиксы"
]
const mockBookImages = [
  "https://api.bookmate.ru/assets/books-covers/cf/22/Bg3mdZVe-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/fc/3b/dlAQzzzK-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/41/d1/ApOv8ISe-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/2c/57/kE83yj2S-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/99/03/cfhkKhXr-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/45/18/lWdpqqMs-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/6c/db/ZsSrVuO7-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/90/af/xKQuo2ek-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/b1/e9/rjnABPr7-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/8a/cc/uekQYMDS-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/42/98/UTFfdSJP-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/04/f9/iQXPvjl2-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/5f/5a/INX13int-ipad.png",
  "https://api.bookmate.ru/assets/books-covers/6b/da/rVhzDNv1-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/e7/a4/cQjRAdcw-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/50/75/vUbfSEtM-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/3d/8f/Qjxqdti4-ipad.jpeg",
  "https://api.bookmate.ru/assets/books-covers/33/58/mqKj8LwN-ipad.jpeg"
]

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
