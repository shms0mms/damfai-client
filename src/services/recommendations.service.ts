import { Book } from "@/types/book"
import { axiosWithAuth } from "@/api/interceptors"

class RecommendationsService {
  private BASE_URL = "/recomendations"

  async getRecommendations() {
    return (
      await axiosWithAuth<Book[]>(`${this.BASE_URL}/books/get_reccomendations`)
    ).data
  }
}

export const recommendationsService = new RecommendationsService()
