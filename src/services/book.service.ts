import type { Book, Chapter, Page } from "@/types/book"
import { axiosDefault, axiosWithAuth } from "@/api/interceptors"
import { books } from "@/components/blocks/bento"
import { randomNumber } from "@/lib/utils"
import type { Pagination } from "@/types"

type GetAllGanresResponse = {
  id: number
  ganre: string
}[]

type GetAllBooksOptions = {
  page: number
  size: number
  filters?: Record<string, string>
}
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
    return new Promise<Book>(res =>
      res({
        id: 1,
        title: books[randomNumber(0, books.length - 1)!]!.title,
        author: books[randomNumber(0, books.length - 1)!]!.author,
        writen_date: new Date(),
        chapters: 100 + 1,
        desc: books[randomNumber(0, books.length - 1)!]!.body,
        ratings: Math.random() * 5,
        ganres: [mockGanres[randomNumber(0, mockGanres.length - 1)]!],
        image: mockBookImages[randomNumber(0, mockBookImages.length - 1)],
        progress: 10.01
      })
    )
  }
  async getAll(options: GetAllBooksOptions) {
    const queryParams = new URLSearchParams({
      page: `${options.page}`,
      size: `${options.size}`,
      ...options.filters
    }).toString()

    const response = await axiosDefault.post<Pagination<Book>>(
      `${this.BASE_URL}?${queryParams}`,
      []
    )
    return response.data
  }
  async getUserBooks() {
    return new Promise<Book[]>(res =>
      res(
        new Array(10).fill(null).map((_, i) => ({
          id: i + 1,
          title: books[randomNumber(0, books.length - 1)!]!.title,
          author: books[randomNumber(0, books.length - 1)!]!.author,
          writen_date: new Date(),
          chapters: randomNumber(0, 500),
          desc: books[randomNumber(0, books.length - 1)!]!.body,
          ratings: Math.random() * 5,
          ganres: [mockGanres[randomNumber(0, mockGanres.length - 1)]!],
          image: mockBookImages[randomNumber(0, mockBookImages.length - 1)],
          progress: 100.0
        }))
      )
    )
  }

  async getAllChapters(id: number) {
    return (
      await axiosDefault.get<GetAllChaptersResponse>(
        `${this.BASE_URL}/chapters/${id}`
      )
    ).data
  }
  async getPagesByChapterId(options: {
    chapterId: number
    page: number
    size: number
  }) {
    return (
      await axiosWithAuth.get<Pagination<Page>>(
        `${this.BASE_URL}/get_pages_by_chapter/${options.chapterId}?page=${options.page}&size=1`
      )
    ).data
  }
}

export const bookService = new BookService()
