import type { Merch } from "@/types/shop"
import { extensionsService } from "./extensions.service"
import { themeService } from "./themes.service"

class ShopService {
  async getExtensions() {
    try {
      return await extensionsService.getAll()
    } catch {
      return { data: [] }
    }
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

  async getThemes() {
    try {
      return await themeService.getAll()
    } catch {
      return { data: [] }
    }
  }
}

export const shopService = new ShopService()
