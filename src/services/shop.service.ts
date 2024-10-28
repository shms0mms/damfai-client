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
        imageUrl:
          "https://avatars.mds.yandex.net/i?id=6bceac607dc4a847cb9e8c42911b89193fad6fd3-4077381-images-thumbs&n=13",
        price: 10000
      },
      {
        id: 2,
        name: "Худи от самого чаппи",
        description: "Удобное худи для зимы",
        imageUrl:
          "https://avatars.mds.yandex.net/i?id=da2a3117ba5604f2fcb2a43aeed77097_l-8223286-images-thumbs&n=13",
        price: 10000
      },
      {
        id: 3,
        name: "Худи от самого чаппи",
        description: "Удобное худи для зимы",
        imageUrl:
          "https://ae04.alicdn.com/kf/Sf39a5829fb1b4b14a9600e52f9d9b6dai.jpg_640x640.jpg",
        price: 10000
      },
      {
        id: 4,
        name: "Худи от самого чаппи",
        description: "Удобное худи для зимы",
        imageUrl:
          "https://ae04.alicdn.com/kf/Sc710ee4bc1954bdb9481842014d2ec3ei.jpg",
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
