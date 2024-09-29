"use client"

import {
  BookOpen,
  ChevronRight,
  Library,
  Star,
  TrendingUp,
  User
} from "lucide-react"
import * as React from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"
import { Header } from "@/components/layout/header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data
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

const readingData = [
  { month: "Jan", books: 3 },
  { month: "Feb", books: 2 },
  { month: "Mar", books: 4 },
  { month: "Apr", books: 3 },
  { month: "May", books: 5 },
  { month: "Jun", books: 4 }
]

export default function Dashboard() {
  const [user, setUser] = React.useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    memberSince: "January 2023",
    avatar: "/placeholder.svg?height=96&width=96"
  })

  const handleProfileUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    setUser(prevUser => ({
      ...prevUser,
      name: (formData.get("name") as string) || prevUser.name,
      email: (formData.get("email") as string) || prevUser.email
    }))
  }

  return (
    <>
      <Header />
      <div className="container mx-auto space-y-8 p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Profile Section */}
          <Card className="col-span-1 md:row-span-2">
            <CardHeader>
              <CardTitle>Профиль</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user.avatar} alt="Profile picture" />
                <AvatarFallback>
                  <User className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-sm text-muted-foreground">{user.email}</p>
                <p className="text-sm text-muted-foreground">
                  Дата регистрации: {user?.created_at}
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">Редактировать</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Редактировать</DialogTitle>
                    <DialogDescription>
                      Внесите изменения в свой профиль здесь. Когда закончите,
                      нажмите сохранить.
                    </DialogDescription>
                  </DialogHeader>
                  <form
                    onSubmit={handleProfileUpdate}
                    className="grid gap-4 py-4"
                  >
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        defaultValue={user.name}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        defaultValue={user.email}
                        className="col-span-3"
                      />
                    </div>
                    <Button type="submit" className="ml-auto">
                      Сохранить
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Analytics Section */}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Чтение аналитических материалов</CardTitle>
              <CardDescription>
                Краткий обзор вашей статистики чтения
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Общее количество прочитанных книг
                </p>
                <p className="text-3xl font-bold">24</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Страницы, прочитанные в этом месяце
                </p>
                <p className="text-3xl font-bold">1,234</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Полоса чтения
                </p>
                <p className="text-3xl font-bold">7 дней</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Среднее время считывания
                </p>
                <p className="text-3xl font-bold">45 мин/день</p>
              </div>
            </CardContent>
          </Card>

          {/* Reading Progress Chart */}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Прогресс чтения</CardTitle>
              <CardDescription>Книги прочитанные за месяц</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={readingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="books" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Books and Bookmarks Tabs */}
          <Card className="col-span-2">
            <Tabs defaultValue="current" className="w-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Книги</CardTitle>
                  <TabsList>
                    <TabsTrigger value="current">Текущие</TabsTrigger>
                    <TabsTrigger value="bookmarks">Закладки</TabsTrigger>
                  </TabsList>
                </div>
              </CardHeader>
              <CardContent>
                <TabsContent value="current">
                  <div className="space-y-4">
                    {books.map(book => (
                      <div
                        key={book.id}
                        className="flex items-center space-x-4"
                      >
                        <BookOpen className="h-6 w-6 shrink-0 text-blue-500" />
                        <div className="min-w-0 flex-1">
                          <h3 className="truncate text-sm font-medium">
                            {book.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {book.author}
                          </p>
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
                      <div
                        key={bookmark.id}
                        className="flex items-center space-x-4"
                      >
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
              </CardContent>
            </Tabs>
          </Card>

          {/* Reading Goal Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Цель чтения</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12 / 30 книг</div>
              <Progress value={40} className="mt-2" />
              <p className="mt-2 text-xs text-muted-foreground">
                40% о достижении годовой цели
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
