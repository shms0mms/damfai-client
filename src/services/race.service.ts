import type { GetMonthlyAuthorResponse, Leader } from "@/types/race"
import { randomNumber } from "@/lib/utils"

const mockNames = [
  "Максим Южиков",
  "Кирилл Торопов",
  "Денис Олиневич",
  "Фёдор Миха́йлович",
  "Лев Федорович",
  "Алекса́ндр Федорович",
  "Василий Федорович"
]

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

  async getLeaderBoard(): Promise<Leader[]> {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return Promise.resolve<Leader[]>(
      Array.from({ length: 100 }).map((_, index) => ({
        id: index + 1,
        place: index + 1,
        name: mockNames[randomNumber(0, mockNames.length - 1)]!,
        points: 1000 - index * 10,
        reward: index < 3 ? `${(3 - (index + 1)) * 50 + 50} Чаппи коинов` : "-"
      }))
    )
  }
}

export const raceService = new RaceService()
