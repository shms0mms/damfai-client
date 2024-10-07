import { AxiosResponse } from "axios"
import { Graph, Statistics } from "@/types/statistics"
import { axiosWithAuth } from "@/api/interceptors"
import { RecordOf } from "@/types"

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
    return await axiosWithAuth.get<RecordOf<number>>(
      `${this.BASE_URL}/favourite_ganres`
    )
  }
}

export const analyticsService = new AnalyticsService()
