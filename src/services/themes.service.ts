import { axiosDefault } from "@/api/interceptors"

export class ThemeService {
  private BASE_URL = "/themes"
  async getAll() {
    return await axiosDefault.get(`${this.BASE_URL}/all`)
  }
  async getById(id: number) {
    return await axiosDefault.get(`${this.BASE_URL}/${id}`)
  }
}

export default new ThemeService()
