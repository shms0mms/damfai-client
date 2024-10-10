import { Extension } from "@/types/shop"

export class ShopService {
  async getExtensions() {
    return await Promise.resolve([
      {
        id: 1,
        slug: "calendar",
        description:
          "Составляйте расписание чтения книг для более удобной работы с книгами",
        price: 1000,
        is_active: false,
        title: "Календарь чтения"
      },
      {
        id: 2,
        slug: "custom-theme",
        description: "Создавайте кастомную тему под себя",
        price: 500,
        is_active: false,
        title: "Создание кастомной темы"
      },
      {
        id: 3,
        slug: "hotkeys",
        description: "Вы можете настраивать горячие клавиши под себя",
        price: 100,
        is_active: false,
        title: "Настройка горячих клавиш"
      },
      {
        id: 4,
        slug: "chappi-pro",
        description:
          "Чаппи отвечает не слишком грамотно, с PRO версией он будет более детально и точно отвечать на ваши вопросы",
        price: 5000,
        is_active: false,
        title: "PRO версия Чаппи"
      }
    ] satisfies Extension[])
  }

  async getMockMerch() {
    return await Promise.resolve([])
  }

  async getThemes() {
    return await Promise.resolve([])
  }
}

export default new ShopService()
