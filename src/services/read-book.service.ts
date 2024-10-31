import { Book } from "@/types/book"
import { axiosWithAuth } from "@/api/interceptors"
import { FormSchema } from "@/components/books/book-form"

export class ReadBookService {
  private BASE_URL = "/books-read"

  private toFormatDate(dob: Date) {
    return dob
      .toLocaleDateString()
      .replaceAll(".", "-")
      .replaceAll("/", "-")
      .split("-")
      .reverse()
      .join("-")
  }

  async getAll() {
    return await axiosWithAuth.get<Book[]>(`${this.BASE_URL}/reading_books`)
  }

  async startRead(book_id: number, data?: FormSchema) {
    const searchParams = data
      ? `?target_of_date=${this.toFormatDate(data.target_of_date)}`
      : ""
    return (
      await axiosWithAuth.post(
        `${this.BASE_URL}/start_to_read/${book_id}${searchParams}`
      )
    ).data
  }

  async updateTarget(book_id: number, data: FormSchema) {
    return (
      await axiosWithAuth.put(
        `${this.BASE_URL}/update_target?book_id=${book_id}&target_of_date=${this.toFormatDate(data.target_of_date)}`
      )
    ).data
  }
  async readPage(
    page: number,
    book_id: number,
    chapter_id: number,
    time_minutes: number
  ) {
    return await axiosWithAuth.get(
      `${this.BASE_URL}/read_page?page=${page}&book_id=${book_id}&chapter_id=${chapter_id}&time_minutes=${time_minutes || 0}`
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
