import type { Merch } from "@/types/shop"
import { axiosWithAuth } from "@/api/interceptors"
import { extensionsService } from "./extensions.service"
import { themeService } from "./themes.service"

class ShopService {
  private BASE_URL = "/shop"

  async getExtensions() {
    try {
      return await extensionsService.getAll()
    } catch {
      return []
    }
  }
  async buyTheme(themeId: number) {
    return (await axiosWithAuth.get(`shop/buy/user/themes/${themeId}`)).data
  }
  async sellTheme(themeId: number) {
    return (await axiosWithAuth.delete(`shop/sell/user/themes/${themeId}`)).data
  }
  getMockMerch() {
    return Promise.resolve<Merch[]>([
      {
        id: 1,
        name: "Худи от самого чаппи",
        description: "Удобное худи для зимы",
        imageUrl: "/mock/merch/01.png",
        price: 10000
      },
      {
        id: 2,
        name: "Худи от самого чаппи",
        description: "Удобное худи для зимы",
        imageUrl: "/mock/merch/02.png",
        price: 10000
      },
      {
        id: 3,
        name: "Худи от самого чаппи",
        description: "Удобное худи для зимы",
        imageUrl: "/mock/merch/03.png",
        price: 10000
      },
      {
        id: 4,
        name: "Худи от самого чаппи",
        description: "Удобное худи для зимы",
        imageUrl: "/mock/merch/04.png",
        price: 10000
      },
      {
        id: 5,
        name: "Худи от самого чаппи",
        description: "Удобное худи для зимы",
        imageUrl: "/mock/merch/05.png",
        price: 10000
      }
    ])
  }

  getThemes() {
    try {
      return themeService.getAll()
    } catch {
      return []
    }
  }
}

export const shopService = new ShopService()
