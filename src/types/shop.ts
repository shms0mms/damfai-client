export type Extension = {
  id: number
  slug: string //
  description: string
  title: string
  is_active: boolean // Активированно или нет
}

export type Theme = {
  id: number
  key: string // rubine, emerald, reading ...
  name: string
  description: string
  price: number // 0 - free [Чаппи коины]

  light: {
    background: string
    foreground: string
    muted: string
    "muted-foreground": string
    popover: string
    "popover-foreground": string
    card: string
    "card-foreground": string
    border: string
    input: string
    primary: string
    "primary-foreground": string
    secondary: string
    "secondary-foreground": string
    accent: string
    "accent-foreground": string
    destructive: string
    "destructive-foreground": string
    ring: string
  }
  dark: {
    background: string
    foreground: string
    muted: string
    "muted-foreground": string
    popover: string
    "popover-foreground": string
    card: string
    "card-foreground": string
    border: string
    input: string
    primary: string
    "primary-foreground": string
    secondary: string
    "secondary-foreground": string
    accent: string
    "accent-foreground": string
    destructive: string
    "destructive-foreground": string
    ring: string
  }
}

export type Merch = {
  id: number
  name: string
  description: string
  imageUrl: string // localhost:8000/shop/merch/img?id=1
  price: number // 0 - free [Чаппи коины]
}
