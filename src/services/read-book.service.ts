import { Book } from "@/types/book"
import { axiosWithAuth } from "@/api/interceptors"

export class ReadBookService {
  private BASE_URL = "/books-read"
  async getAll() {
    return await axiosWithAuth.get<Book[]>(`${this.BASE_URL}/reading_books`)
  }
  async makeTargetBook(book_id: number, min_days: number, max_days: number) {
    return (
      await axiosWithAuth.put(
        `${this.BASE_URL}/make_target?book_id=${book_id}&min_days=${min_days}&max_days=${max_days}`
      )
    ).data
  }
  async startRead(book_id: number) {
    return await axiosWithAuth.post(`${this.BASE_URL}/start_to_read/${book_id}`)
  }
  async readPage(page_id: number, book_id: number) {
    return await axiosWithAuth.get(
      `${this.BASE_URL}/read_page?page_id=${page_id}&book_id=${book_id}`
    )
  }
  async finishBook(book_id: number) {
    return await axiosWithAuth.get(
      `${this.BASE_URL}/finish_book?book_id=${book_id}`
    )
  }
  async getTarget(book_id: number) {
    return (await axiosWithAuth.get(`${this.BASE_URL}/target/${book_id}`)).data
  }
}

export const readBookService = new ReadBookService()
