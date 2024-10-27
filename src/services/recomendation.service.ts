import { Book } from "@/types/book"
import { axiosDefault } from "@/api/interceptors"
import { Pagination } from "@/types"

type GetAllBooksOptions = {
  page: number
  size: number
  filters?: Record<string, string>
}
export class RecomendationService {
  private BASE_URL = "/recomendations"

  async getAll(options: GetAllBooksOptions) {
    const queryParams = new URLSearchParams({
      page: `${options.page}`,
      size: `${options.size}`,
      ...options.filters
    }).toString()

    const response = await axiosDefault.post<Pagination<Book>>(
      `${this.BASE_URL}/books/search?${queryParams}`,
      []
    )
    return response.data
  }
}

export const recomendationService = new RecomendationService()
