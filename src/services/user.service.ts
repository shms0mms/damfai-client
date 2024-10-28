import type { Theme } from "@/types/shop"

class UserService {
  getUserThemes() {
    return Promise.resolve<Theme[]>([
      {
        id: 1,
        name: "Изумрудная тема",
        description: "Изумрудная тема в зеленых цветах",
        light: {
          background: "0 0% 100%",
          foreground: "240 10% 3.9%",
          muted: "240 4.8% 95.9%",
          "muted-foreground": "240 3.8% 46.1%",
          popover: "0 0% 100%",
          "popover-foreground": "240 10% 3.9%",
          card: "0 0% 100%",
          "card-foreground": "239 10% 3.9%",
          border: "240 5.9% 90%",
          input: "240 5.9% 90%",
          primary: "142.1 76.2% 36.3%",
          "primary-foreground": "355.7 100% 97.3%",
          secondary: "240 4.8% 95.9%",
          "secondary-foreground": "240 5.9% 10%",
          accent: "240 4.8% 95.9%",
          "accent-foreground": "240 5.9% 10%",
          destructive: "0 84.2% 60.2%",
          "destructive-foreground": "0 0% 98%",
          ring: "142.1 76.2% 36.3%"
        },
        dark: {
          background: "20 14.3% 4.1%",
          foreground: "0 0% 95%",
          muted: "0 0% 15%",
          "muted-foreground": "240 5% 64.9%",
          popover: "0 0% 9%",
          "popover-foreground": "0 0% 95%",
          card: "24 9.8% 10%",
          "card-foreground": "0 0% 95%",
          border: "240 3.7% 15.9%",
          input: "240 3.7% 15.9%",
          primary: "142.1 70.6% 45.3%",
          "primary-foreground": "144.9 80.4% 10%",
          secondary: "240 3.7% 15.9%",
          "secondary-foreground": "0 0% 98%",
          accent: "12 6.5% 15.1%",
          "accent-foreground": "0 0% 98%",
          destructive: "0 62.8% 30.6%",
          "destructive-foreground": "0 85.7% 97.3%",
          ring: "142.4 71.8% 29.2%"
        },
        price: 20000,
        key: "emerald"
      },
      {
        id: 2,
        name: "Рубиновая тема",
        description: "Рубиновая тема в красных цветах",
        light: {
          background: "0 0% 100%",
          foreground: "0 0% 3.9%",
          muted: "0 0% 96.1%",
          "muted-foreground": "0 0% 45.1%",
          popover: "0 0% 100%",
          "popover-foreground": "0 0% 3.9%",
          card: "0 0% 100%",
          "card-foreground": "0 0% 3.9%",
          border: "0 0% 89.8%",
          input: "0 0% 89.8%",
          primary: "0 72.2% 50.6%",
          "primary-foreground": "0 85.7% 97.3%",
          secondary: "0 0% 96.1%",
          "secondary-foreground": "0 0% 9%",
          accent: "0 0% 96.1%",
          "accent-foreground": "0 0% 9%",
          destructive: "0 84.2% 60.2%",
          "destructive-foreground": "0 0% 98%",
          ring: "0 72.2% 50.6%"
        },
        dark: {
          background: "0 0% 3.9%",
          foreground: "0 0% 98%",
          muted: "0 0% 14.9%",
          "muted-foreground": "0 0% 63.9%",
          popover: "0 0% 3.9%",
          "popover-foreground": "0 0% 98%",
          card: "0 0% 3.9%",
          "card-foreground": "0 0% 98%",
          border: "0 0% 14.9%",
          input: "0 0% 14.9%",
          primary: "0 72.2% 50.6%",
          "primary-foreground": "0 85.7% 97.3%",
          secondary: "0 0% 14.9%",
          "secondary-foreground": "0 0% 98%",
          accent: "0 0% 14.9%",
          "accent-foreground": "0 0% 98%",
          destructive: "0 62.8% 30.6%",
          "destructive-foreground": "0 0% 98%",
          ring: "0 72.2% 50.6%"
        },
        price: 50000,
        key: "rubine"
      }
    ])
  }
}

export const userService = new UserService()
