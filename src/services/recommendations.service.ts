import { Book } from "@/types/book"
import { axiosWithAuth } from "@/api/interceptors"
import { Pagination } from "@/types"

class RecommendationsService {
  private BASE_URL = "/recommendations"

  async getRecommendations() {
    try {
      return (
        await axiosWithAuth.get<Book[]>(
          `${this.BASE_URL}/books/get_reccomendations`
        )
      ).data
    } catch {
      return []
    }
  }

  async searchBooks(options: {
    page: number
    size: number
    filters: Record<string, string>
  }) {
    try {
      return (
        await axiosWithAuth.post<Pagination<Book>>(
          `${this.BASE_URL}/books/search`,
          "ganre" in options.filters ? [+options.filters.ganre] : undefined,
          {
            params: {
              ...options.filters,
              ganre: undefined,
              page: options.page,
              size: options.size
            }
          }
        )
      ).data
    } catch {
      return {
        items: [],
        pages: 0,
        page: options.page,
        size: options.size,
        total: 0
      } satisfies Pagination<Book>
    }
  }
}

export const recommendationsService = new RecommendationsService()
