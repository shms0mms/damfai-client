import { BookOpen, ChevronRight, Heart, Star, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

const bookmarks = [
  { id: 1, title: "The Catcher in the Rye", author: "J.D. Salinger", page: 42 },
  {
    id: 2,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    page: 156
  },
  { id: 3, title: "The Hobbit", author: "J.R.R. Tolkien", page: 89 }
]
export default function Books() {
  return (
    <Card className="max-xl:col-span-2">
      <Tabs defaultValue="current" className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between gap-2 max-md:flex-col max-md:items-start">
            <CardTitle>Книги</CardTitle>
            <TabsList>
              <TabsTrigger value="current">Текущие</TabsTrigger>
              <TabsTrigger value="bookmarks">Закладки</TabsTrigger>
              <TabsTrigger value="favourite">Избранное</TabsTrigger>
            </TabsList>
          </div>
        </CardHeader>
        <CardContent>
          <TabsContent value="current">
            <div className="space-y-4">
              {books.map(book => (
                <div
                  key={book.id}
                  className="flex items-center space-x-4 max-md:flex-col max-md:items-start"
                >
                  <div className="flex flex-1 items-center gap-2">
                    <BookOpen className="h-6 w-6 shrink-0 text-blue-500" />
                    <div>
                      <h3 className="truncate text-sm font-medium">
                        {book.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {book.author}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Progress value={book.progress} className="w-24" />
                    <span className="whitespace-nowrap text-sm text-muted-foreground">
                      {book.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="bookmarks">
            <div className="space-y-4">
              {bookmarks.map(bookmark => (
                <div key={bookmark.id} className="flex items-center space-x-4">
                  <Star className="h-6 w-6 shrink-0 text-yellow-500" />
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-medium">
                      {bookmark.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {bookmark.author}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="whitespace-nowrap text-sm text-muted-foreground">
                      Page {bookmark.page}
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="favourite">
            <div className="space-y-4">
              {bookmarks.map(bookmark => (
                <div key={bookmark.id} className="flex items-center space-x-4">
                  <Heart className="h-6 w-6 shrink-0 text-red-500" />
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-medium">
                      {bookmark.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {bookmark.author}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  )
}
