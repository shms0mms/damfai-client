import { Book } from "@/types/book"
import { axiosWithAuth } from "@/api/interceptors"

export class ReadBookService {
  private BASE_URL = "/books-read"
  async getAll() {
    return await axiosWithAuth.get<Book[]>(`${this.BASE_URL}/reading_books`)
  }
}

export default new ReadBookService()
