import { Quest } from "@/types/pass"

export class PassService {
  private BASE_URL = "/pass"

  async getQuests() {
    return await Promise.resolve<Quest[]>([
      {
        id: 1,
        title: "Победы",
        description: "Одержите победу в 3 матчах",
        experience: 500,
        progress: 3,
        total: 3,
        icon: "trophy"
      },
      {
        id: 2,
        title: "Звёздный игрок",
        description: "Станьте звёздным игроком 2 раза",
        experience: 250,
        progress: 0,
        total: 2,
        icon: "star"
      },
      {
        id: 3,
        title: "Урон",
        description: "Нанесите 20000 урона врагам",
        experience: 100,
        progress: 15000,
        total: 20000,
        icon: "zap"
      },
      {
        id: 4,
        title: "Битвы",
        description: "Примите участие в 5 битвах",
        experience: 150,
        progress: 3,
        total: 5,
        icon: "swords"
      },
      {
        id: 5,
        title: "Мастер",
        description: "Выиграйте 10 матчей подряд в рейтинговом режиме",
        experience: 1000,
        progress: 2,
        total: 10,
        icon: "crown"
      },
      {
        id: 6,
        title: "Коллекционер",
        description: "Соберите 50 уникальных предметов",
        experience: 300,
        progress: 30,
        total: 50,
        icon: "star"
      }
    ])
  }
}

export const passService = new PassService()
