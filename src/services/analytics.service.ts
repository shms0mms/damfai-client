import { AxiosResponse } from "axios"
import { Graph, Statistics } from "@/types/statistics"
import { axiosWithAuth } from "@/api/interceptors"

class AnalyticsService {
  private BASE_URL = "/analytics"

  // Statistics
  async getStatistics(): Promise<Partial<AxiosResponse<Statistics>>> {
    return await axiosWithAuth.get<Statistics>(`${this.BASE_URL}/reading_info`)
  }

  // Получение графика прочтения книг за последние 6 месяцев
  async getGraphBooksPerMonths() {
    return (
      await axiosWithAuth.get<Graph["BooksPerYear"]>(
        `${this.BASE_URL}/get_books_last_12_months`
      )
    ).data
  }

  // Получение графика прочтения страниц за последнюю неделю
  async getGraphPagesPerWeek() {
    return await axiosWithAuth.get<Graph["PagesPerWeek"]>(
      `${this.BASE_URL}/get_pages_last_7_days`
    )
  }

  // Получение графика минут за последнюю неделю
  async getGraphMinutesPerWeek() {
    return await axiosWithAuth.get<Graph["MinutesPerWeek"]>(
      `${this.BASE_URL}/get_minutes_last_7_days`
    )
  }
  // Получение графика прочитанных книг за год (круглый график)
  async getGraphBooksPerYear() {
    return await axiosWithAuth.get<Graph["BooksPerYear"]>(
      `${this.BASE_URL}/get_books_last_12_months`
    )
  }

  // Получение любимых жанров
  async getFavouriteGanres() {
    return await axiosWithAuth.get<string>(`${this.BASE_URL}/favourite_ganres`)
  }

  async add_minutes_per_day(minutes: number) {
    return await axiosWithAuth.post(
      `${this.BASE_URL}/minutes_per_day/add?time_minutes=${minutes}`
    )
  }
  async update_speed_words_per_minute(speed: number) {
    return await axiosWithAuth.put(
      `${this.BASE_URL}/update_sped_words_per_minute?speed=${speed}`
    )
  }
}

export const analyticsService = new AnalyticsService()
