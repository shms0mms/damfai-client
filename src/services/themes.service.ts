import { Theme } from "@/types/shop"
import { axiosDefault, axiosWithAuth } from "@/api/interceptors"

export class ThemeService {
  private BASE_URL = "/themes"
  async getAll() {
    return await axiosDefault.get(`${this.BASE_URL}/all`)
  }
  async getById(id: number): Promise<Theme> {
    await new Promise(res => setTimeout(res, 1000))
    return (await axiosDefault.get(`${this.BASE_URL}/${id}`)).data
  }

  async getUserThemes() {
    return await axiosWithAuth.get(`${this.BASE_URL}/user/themes`)
  }

  async addThemeToUser(themeId: number) {
    return await axiosWithAuth.get(
      `${this.BASE_URL}/add/user/themes/${themeId}`
    )
  }

  async removeThemeFromUser(themeId: number) {
    return await axiosWithAuth.delete(
      `${this.BASE_URL}/remove/user/themes/${themeId}`
    )
  }
}

export const themeService = new ThemeService()
