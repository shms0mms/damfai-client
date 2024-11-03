import type { ActiveRace, LeaderBoard } from "@/types/race"
import { axiosWithAuth } from "@/api/interceptors"

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
