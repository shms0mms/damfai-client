import { Book } from "@/types/book"
import { axiosWithAuth } from "@/api/interceptors"

class RecommendationsService {
  private BASE_URL = "/recomendations"

  async getRecommendations() {
    try {
      return (
        await axiosWithAuth<Book[]>(
          `${this.BASE_URL}/books/get_reccomendations`
        )
      ).data
    } catch (error) {
      return []
    }
  }
}

export const recommendationsService = new RecommendationsService()
