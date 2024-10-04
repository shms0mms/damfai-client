export interface Favourite {
  id: number
  title: string
  author: string
  desc: string
  writen_date: Date
  age_of_book: number
}

export interface FavouriteComponent extends Favourite {
  icon: React.ReactNode
  isLoading?: boolean
}
