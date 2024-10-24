import type { Extension } from "@/types/shop"

class ExtensionsService {
  async getAll() {
    return await Promise.resolve<Extension[]>([
      {
        id: 1,
        slug: "calendar",
        description:
          "Составляйте расписание чтения книг для более удобной работы с книгами",
        is_active: false,
        title: "Календарь чтения"
      },
      {
        id: 2,
        slug: "custom-theme",
        description: "Создавайте кастомную тему под себя",
        is_active: false,
        title: "Создание кастомной темы"
      },
      {
        id: 3,
        slug: "hotkeys",
        description: "Вы можете настраивать горячие клавиши под себя",
        is_active: false,
        title: "Настройка горячих клавиш"
      },
      {
        id: 4,
        slug: "chappi-pro",
        description:
          "Чаппи отвечает не слишком грамотно, с PRO версией он будет более детально и точно отвечать на ваши вопросы",
        is_active: false,
        title: "PRO версия Чаппи"
      }
    ])
  }
  async getById(extensionId: string) {
    return (await this.getAll()).find(f => f.id == +extensionId)
  }
}

export const extensionsService = new ExtensionsService()
