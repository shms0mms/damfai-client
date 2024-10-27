export type Reward = {
  id: number // ID награды
  x: number // Позиция на карте (Просто хранится в БД)
  y: number // Позиция на карте (Просто хранится в БД)
  title: string // Название награды
  connectedTo: number[] // Просто хранится в БД
  completed: boolean
  description: string // Описание награды (что получим)
  size?: "big" | "default" | "small" // размер награды (нужно для отображения на карте)
  type: "coins" | "merch" | "extension" | "theme" | "book" // тип награды
}
