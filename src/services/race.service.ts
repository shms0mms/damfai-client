import type { ActiveRace, LeaderBoard } from "@/types/race"
import { axiosWithAuth } from "@/api/interceptors"

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
  private BASE_URL = "/running"

  async getActiveRace(): Promise<ActiveRace> {
    return (await axiosWithAuth.get<ActiveRace>(`${this.BASE_URL}/active`)).data
  }

  async getLeaderBoard(): Promise<LeaderBoard> {
    return (
      await axiosWithAuth.get<LeaderBoard>(`${this.BASE_URL}/leaderboard`)
    ).data
  }
}

export const raceService = new RaceService()
