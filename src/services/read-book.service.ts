import { Book } from "@/types/book"
import { axiosWithAuth } from "@/api/interceptors"

export class ReadBookService {
  private BASE_URL = "/books-read"
  async getAll() {
    return await axiosWithAuth.get<Book[]>(`${this.BASE_URL}/reading_books`)
  }

  async startRead(book_id: number) {
    return await axiosWithAuth.post(`${this.BASE_URL}/start_to_read/${book_id}`)
  }
  async readPage(page_id: number, book_id: number) {
    return await axiosWithAuth.get(
      `${this.BASE_URL}/read_page?page_id=${page_id}&book_id=${book_id}`
    )
  }
}

export const readBookService = new ReadBookService()
