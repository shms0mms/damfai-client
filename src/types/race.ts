export type GetMonthlyAuthorResponse = {
  author: string
  description: string
}

export type Leader = {
  id: number
  place: number
  name: string
  points: number
}

export type LeaderBoard = {
  topUsers: Leader[]
  userRank: Leader
}

export const RACE_STATUS = {
  started: "started",
  finished: "finished"
} as const
export type RaceStatus = (typeof RACE_STATUS)[keyof typeof RACE_STATUS]

export type ActiveRace = {
  id: number
  name_running: string
  author_name: string
  start_running_date: Date
  end_running_date: Date
  status: RaceStatus
  winners: []
  prizes: { place: number; chappi_tokens: number }[]
}
