import type { Theme } from "@/types/shop"

class UserService {
  getUserThemes() {
    return Promise.resolve<Theme[]>([
      {
        id: 1,
        name: "Изумрудная тема",
        key: "",
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
      },
      {
        id: 3,
        name: "Для чтения",
        description: "Тема для чтения в приятных цветах",
        backgroundColor: "#ffffff",
        textColor: "#000000",
        primaryColor: "#e11d48",
        primaryTextColor: "#ffffff",
        price: 50000,
        key: "reading"
      }
    ])
  }
}

export const userService = new UserService()
