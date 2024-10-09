import { AxiosResponse } from "axios"
import { BookOpen, Heart, Star } from "lucide-react"
import { Bookmark } from "@/types/bookmarks"
import { Favourite } from "@/types/favourites"
import {useLazyQuery} from "@/hooks/useLazyQuery"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TabItem } from "./tab-item"
import { bookmarksService } from "@/services/bookmarks.service"
import { favouriteService } from "@/services/favourite.service"

const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", progress: 75 },
  { id: 2, title: "1984", author: "George Orwell", progress: 30 },
  { id: 3, title: "Pride and Prejudice", author: "Jane Austen", progress: 100 },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    progress: 50
  }
]

export function BooksDashboard() {
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
  return (
    <Card className="max-xl:col-span-2">
      <Tabs
        defaultValue="current"
        className="flex h-full w-full flex-col gap-2"
      >
        <CardHeader>
          <div className="flex items-center justify-between gap-2 max-md:flex-col max-md:items-start">
            <CardTitle>Книги</CardTitle>
            <TabsList>
              <TabsTrigger onClick={() => {}} value="current">
                Текущие
              </TabsTrigger>
              <TabsTrigger onClick={() => getBookmarks()} value="bookmarks">
                Закладки
              </TabsTrigger>
              <TabsTrigger onClick={() => getFavourites()} value="favourite">
                Избранное
              </TabsTrigger>
            </TabsList>
          </div>
        </CardHeader>
        <CardContent className="h-full">
          <TabItem
            books={[]}
            value="current"
            isLoading={isLoadingBooksmarks}
            icon={<BookOpen className="h-6 w-6 shrink-0 text-blue-500" />}
          />
          <TabItem
            books={bookmarks!}
            value="bookmarks"
            isLoading={isLoadingBooksmarks}
            icon={<Star className="h-6 w-6 shrink-0 text-yellow-500" />}
          />
          <TabItem
            books={favourites!}
            value="favourite"
            isLoading={isLoadingFavourites}
            icon={<Heart className="h-6 w-6 shrink-0 text-red-500" />}
          />
        </CardContent>
      </Tabs>
    </Card>
  )
}
