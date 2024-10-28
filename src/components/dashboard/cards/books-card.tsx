"use client"

import { BookOpen, Heart, Star } from "lucide-react"
import { useEffect } from "react"
import { useDashboardBooks } from "@/hooks/useDashboardBooks"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TabItem } from "../books/tab-item"

export function BooksCard() {
  const { bookmarks, books, favourites } = useDashboardBooks()
  useEffect(() => void books.get(), [])
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
              <TabsTrigger
                className="max-md:px-1.5"
                onClick={books.get}
                value="current"
              >
                Текущие
              </TabsTrigger>
              <TabsTrigger
                className="max-md:px-1.5"
                onClick={bookmarks.get}
                value="bookmarks"
              >
                Закладки
              </TabsTrigger>
              <TabsTrigger
                className="max-md:px-1.5"
                onClick={favourites.get}
                value="favourite"
              >
                Избранное
              </TabsTrigger>
            </TabsList>
          </div>
        </CardHeader>
        <CardContent className="h-full">
          <TabItem
            books={books.books!}
            value="current"
            isLoading={books.isLoading}
            icon={<BookOpen className="h-6 w-6 shrink-0 text-blue-500" />}
          />
          <TabItem
            books={bookmarks.bookmarks!}
            value="bookmarks"
            isLoading={bookmarks.isLoading}
            icon={<Star className="h-6 w-6 shrink-0 text-yellow-500" />}
          />
          <TabItem
            books={favourites.favourites!}
            value="favourite"
            isLoading={favourites.isLoading}
            icon={<Heart className="h-6 w-6 shrink-0 text-red-500" />}
          />
        </CardContent>
      </Tabs>
    </Card>
  )
}
