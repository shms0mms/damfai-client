export type Bookmark = {
  id: number
  title: string
  author: string
  desc: string
  writenDate: Date
  ageOfBook: number
  // Текущие данные о книге, которую читаю
  idCurrentChapter?: number
  currentPage?: number
  currentNumberOfPage?: number
}

export interface BookmarkComponent extends Bookmark {
  icon: React.ReactNode
  isLoading?: boolean
}
