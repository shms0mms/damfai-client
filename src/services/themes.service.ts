import { Theme } from "@/types/shop"
import { axiosDefault } from "@/api/interceptors"

export class ThemeService {
  private BASE_URL = "/themes"
  async getAll() {
    // return await axiosDefault.get(`${this.BASE_URL}/all`)
    return Promise.resolve<Theme[]>([
      {
        id: 1,
        name: "Изумрудная тема",
        description: "Изумрудная тема в зеленых цветах",
        backgroundColor: "#ffffff",
        textColor: "#000000",
        primaryColor: "#22c55e",
        primaryTextColor: "#000000",
        price: 20000,
        key: "emerald"
      },
      {
        id: 2,
        name: "Рубиновая тема",
        description: "Рубиновая тема в красных цветах",
        backgroundColor: "#ffffff",
        textColor: "#000000",
        primaryColor: "#e11d48",
        primaryTextColor: "#ffffff",
        price: 50000,
        key: "rubine"
      }
    ])
  }
  async getById(id: number) {
    return await axiosDefault.get(`${this.BASE_URL}/${id}`)
  }
}

export default new ThemeService()
