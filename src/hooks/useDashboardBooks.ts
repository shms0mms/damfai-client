import { AxiosResponse } from "axios"
import { Book } from "@/types/book"
import { Bookmark } from "@/types/bookmarks"
import { Favourite } from "@/types/favourites"
import { useLazyQuery } from "./useLazyQuery"
import { bookmarksService } from "@/services/bookmarks.service"
import { favouriteService } from "@/services/favourite.service"
import { readBookService } from "@/services/read-book.service"

const useDashboardBooks = () => {
  const {
    data: _bookmarks,
    query: getBookmarks,
    isLoading: isLoadingBooksmarks
  } = useLazyQuery<AxiosResponse<Bookmark[]>>(["/bookmarks"], () =>
    bookmarksService.getAll()
  )
  const bookmarks = _bookmarks?.data
  const {
    data: _favourites,
    query: getFavourites,
    isLoading: isLoadingFavourites
  } = useLazyQuery<AxiosResponse<Favourite[]>>(["/favourites"], () =>
    favouriteService.getAll()
  )
  const favourites = _favourites?.data

  const {
    data: _books,
    query: getBooks,
    isLoading: isLoadingBooks
  } = useLazyQuery<AxiosResponse<Book[]>>(["/books"], () =>
    readBookService.getAll()
  )
  const books = _books?.data

  return {
    favourites: {
      favourites,
      isLoading: isLoadingFavourites,
      get: getFavourites
    },
    bookmarks: { bookmarks, isLoading: isLoadingBooksmarks, get: getBookmarks },
    books: { books, isLoading: isLoadingBooks, get: getBooks }
  }
}

export default useDashboardBooks
