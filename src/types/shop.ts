export type Extension = {
  id: number
  slug: string //
  description: string
  title: string
  is_active: boolean // Активированно или нет
}

export type Theme = {
  id: number
  name: string
  description: string
  backgroundColor: string // hex
  textColor: string // hex
  primaryColor: string // hex
  primaryTextColor: string // hex
  price: number // 0 - free [Чаппи коины]
}

export type Merch = {
  id: number
  name: string
  description: string
  imageUrl: string // localhost:8000/shop/merch/img?id=1
  price: number // 0 - free [Чаппи коины]
}
