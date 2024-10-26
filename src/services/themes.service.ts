import { axiosDefault, axiosWithAuth } from "@/api/interceptors"

export class ThemeService {
  private BASE_URL = "/themes"
  async getAll() {
    return await axiosDefault.get(`${this.BASE_URL}/all`)
  }
  async getById(id: number) {
    return await axiosDefault.get(`${this.BASE_URL}/${id}`)
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

export default new ThemeService()
