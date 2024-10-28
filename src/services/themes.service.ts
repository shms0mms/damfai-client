import { type Theme } from "@/types/shop"
import { axiosDefault, axiosWithAuth } from "@/api/interceptors"

export class ThemeService {
  private BASE_URL = "/themes"

  async getAll() {
    return (await axiosDefault.get<Theme[]>(`${this.BASE_URL}/all`)).data
  }
  getUserThemes = async () => {
    return (await axiosWithAuth.get<Theme[]>(`${this.BASE_URL}/user/themes`))
      .data
  }
  async getById(id: number): Promise<Theme> {
    return (await axiosDefault.get<Theme>(`${this.BASE_URL}/${id}`)).data
  }
  addThemeToUser = async (themeId: number) => {
    return (
      await axiosWithAuth.get(`${this.BASE_URL}/add/user/themes/${themeId}`)
    ).data
  }

  async removeThemeFromUser(themeId: number) {
    return (
      await axiosWithAuth.delete(
        `${this.BASE_URL}/remove/user/themes/${themeId}`
      )
    ).data
  }
}

export const themeService = new ThemeService()
