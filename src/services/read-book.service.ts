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

  async startRead(bookId: number, data?: FormSchema) {
    const searchParams = data
      ? `?target_of_date=${this.toFormatDate(data.targetOfDate)}`
      : ""
    return (
      await axiosWithAuth.post(
        `${this.BASE_URL}/start_to_read/${bookId}${searchParams}`
      )
    ).data
  }

  async updateTarget(bookId: number, data: FormSchema) {
    return (
      await axiosWithAuth.put(
        `${this.BASE_URL}/update_target?book_id=${bookId}&target_of_date=${this.toFormatDate(data.targetOfDate)}`
      )
    ).data
  }
  async readPage(
    pageId: number,
    bookId: number,
    chapterId: number,
    timeMinutes: number
  ) {
    return await axiosWithAuth.get(
      `${this.BASE_URL}/read_page?page_id=${pageId}&book_id=${bookId}&chapter_id=${chapterId}&time_minutes=${timeMinutes || 0}`
    )
  }
  async finishBook(bookId: number) {
    return await axiosWithAuth.get(
      `${this.BASE_URL}/finish_book?book_id=${bookId}`
    )
  }
  async getTarget(bookId: number) {
    return (await axiosWithAuth.get(`${this.BASE_URL}/target/${bookId}`)).data
  }
}

export const readBookService = new ReadBookService()
