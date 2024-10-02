import { AxiosResponse } from "axios"
import { Graph, Statistics } from "@/types/statistics"
import { axiosWithAuth } from "@/api/interceptors"

class StatisticsService {
  private BASE_URL = "/statistics"

  // Statistics
  async getStatistics(): Promise<Partial<AxiosResponse<Statistics>>> {
    // return await axiosWithAuth.get<Statistics>(`${this.BASE_URL}`)
    return new Promise(resolve =>
      resolve({
        data: {
          books_count: 10,
          pages_count: 100,
          words_per_min: 10,
          minutes_per_day: 10,
          pages_per_month: 10,
          books_per_month: 10
        } satisfies Statistics
      })
    )
  }

  // Получение графика прочтения книг за последние 6 месяцев
  async getGraphBooksPerMonths() {
    // return await axiosWithAuth.get<Graph["BooksPerMonths"]>(
    //   `${this.BASE_URL}/graph/books_per_months`
    // )
    return new Promise(resolve => resolve({} satisfies Graph["BooksPerMonths"]))
  }

  // Получение графика прочтения страниц за последнюю неделю
  async getGraphPagesPerWeek() {
    // return await axiosWithAuth.get<Graph["PagesPerWeek"]>(
    //   `${this.BASE_URL}/graph/pages_per_week`
    // )
    return new Promise(resolve => resolve({} satisfies Graph["PagesPerWeek"]))
  }

  // Получение графика минут за последнюю неделю
  async getGraphMinutesPerWeek() {
    // return await axiosWithAuth.get<Graph["MinutesPerWeek"]>(
    //   `${this.BASE_URL}/graph/minutes_per_week`
    // )
    return new Promise(resolve => resolve({} satisfies Graph["MinutesPerWeek"]))
  }
  // Получение графика прочитанных книг за год (круглый график)
  async getGraphBooksPerYear() {
    // return await axiosWithAuth.get<Graph["BooksPerYear"]>(
    //   `${this.BASE_URL}/graph/books_per_year`
    // )
    return new Promise(resolve => resolve({} satisfies Graph["BooksPerYear"]))
  }
}

export const statisticsService = new StatisticsService()
