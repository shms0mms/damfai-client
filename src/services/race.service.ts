import type { GetMonthlyAuthorResponse } from "@/types/race"

class RaceService {
  private BASE_URL = "/race"

  async getMonthlyAuthor(): Promise<GetMonthlyAuthorResponse> {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return Promise.resolve({
      author: "Фёдор Миха́йлович Достое́вский",
      description:
        "Русский писатель, мыслитель, философ и публицист. Член-корреспондент Петербургской академии наук с 1877 года."
    })
  }
}

export const raceService = new RaceService()
