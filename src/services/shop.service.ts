import { Extension, Merch, Theme } from "@/types/shop"

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
      },
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
    return await Promise.resolve([
      {
        id: 1,
        name: "Худи от самого чаппи",
        description: "Удобное худи для зимы",
        imageUrl:
          "https://avatars.mds.yandex.net/i?id=6bceac607dc4a847cb9e8c42911b89193fad6fd3-4077381-images-thumbs&n=13",
        price: 10000
      },
      {
        id: 1,
        name: "Худи от самого чаппи",
        description: "Удобное худи для зимы",
        imageUrl:
          "https://avatars.mds.yandex.net/i?id=da2a3117ba5604f2fcb2a43aeed77097_l-8223286-images-thumbs&n=13",
        price: 10000
      },
      {
        id: 1,
        name: "Худи от самого чаппи",
        description: "Удобное худи для зимы",
        imageUrl:
          "https://ae04.alicdn.com/kf/Sf39a5829fb1b4b14a9600e52f9d9b6dai.jpg_640x640.jpg",
        price: 10000
      },
      {
        id: 1,
        name: "Худи от самого чаппи",
        description: "Удобное худи для зимы",
        imageUrl:
          "https://ae04.alicdn.com/kf/Sc710ee4bc1954bdb9481842014d2ec3ei.jpg",
        price: 10000
      }
    ] satisfies Merch[])
  }

  async getThemes() {
    return await Promise.resolve([
      {
        id: 1,
        name: "Обычная тема",
        description: "Тема с белым цветом",
        backgroundColor: "#000000",
        textColor: "#ffffff",
        price: 1000
      },
      {
        id: 2,
        name: "Изумрудная тема",
        description: "Изумрудная тема в зеленых цветах",
        backgroundColor: "#00674f",
        textColor: "#73e6cb",
        price: 20000
      },
      {
        id: 3,
        name: "Рубиновая тема",
        description: "Рубиновая тема в красных цветах",
        backgroundColor: "#9b111e",
        textColor: "#e82a3c",
        price: 50000
      },

      {
        id: 4,
        name: "Обычная тема",
        description: "Тема с белым цветом",
        backgroundColor: "#000000",
        textColor: "#ffffff",
        price: 1000
      },
      {
        id: 5,
        name: "Изумрудная тема",
        description: "Изумрудная тема в зеленых цветах",
        backgroundColor: "#00674f",
        textColor: "#73e6cb",
        price: 20000
      },
      {
        id: 6,
        name: "Рубиновая тема",
        description: "Рубиновая тема в красных цветах",
        backgroundColor: "#9b111e",
        textColor: "#e82a3c",
        price: 50000
      },

      {
        id: 7,
        name: "Обычная тема",
        description: "Тема с белым цветом",
        backgroundColor: "#000000",
        textColor: "#ffffff",
        price: 1000
      },
      {
        id: 8,
        name: "Изумрудная тема",
        description: "Изумрудная тема в зеленых цветах",
        backgroundColor: "#00674f",
        textColor: "#73e6cb",
        price: 20000
      }
    ] satisfies Theme[])
  }
}

export default new ShopService()
