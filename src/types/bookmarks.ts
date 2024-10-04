export interface Bookmark {
  id: number
  title: string
  author: string
  desc: string
  writen_date: Date
  age_of_book: number
  // Текущие данные о книге, которую читаю
  id_current_chapter?: number
  current_page?: number
}

export interface BookmarkComponent extends Bookmark {
  icon: React.ReactNode
  isLoading?: boolean
}
