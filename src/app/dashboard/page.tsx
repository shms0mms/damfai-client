"use client"

import { BookOpen, ChevronRight, Star, User } from "lucide-react"
import * as React from "react"
import { type User as UserType } from "@/types/user"
import { AuthContext } from "@/providers/auth"
import BarChart1 from "@/components/dashboard/bar-chart-1"
import BarChart2 from "@/components/dashboard/bar-chart-2"
import BarChart3 from "@/components/dashboard/bar-chart-3"
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

export default function Dashboard() {
  const { user } = React.useContext(AuthContext)

  const handleProfileUpdate = (event: React.FormEvent<HTMLFormElement>) => {}

  return (
    <>
      <Header />
      <div className="container mx-auto space-y-8 p-6">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {/* Profile Section */}
          <Card className="col-span-1 max-xl:col-span-2">
            <CardHeader>
              <CardTitle>Профиль</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage alt="Icon of profile" />
                <AvatarFallback>
                  <User className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h2 className="text-xl font-bold">{user?.name}</h2>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
                <p className="text-sm text-muted-foreground">
                  На сайте с: {user?.created_at?.toLocaleDateString?.()}
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="">Редактировать</Button>
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
                        defaultValue={user?.name}
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
                        defaultValue={user?.email}
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
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Чтение аналитических материалов</CardTitle>
              <CardDescription>
                Краткий обзор вашей статистики чтения
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4 max-md:grid-cols-1 max-md:gap-8">
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
                  Книги, прочитанные в этом месяце
                </p>
                <p className="text-3xl font-bold">17</p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Среднее время считывания
                </p>
                <p className="text-3xl font-bold">45 мин/день</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Скорость чтения в минуту
                </p>
                <p className="text-3xl font-bold">45 слов/мин</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Скорость чтения в час
                </p>
                <p className="text-3xl font-bold">45 слов/час</p>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Прогресс чтения</CardTitle>
              <CardDescription>Книги прочитанные за месяц</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <BarChart1 />
            </CardContent>
          </Card>{" "}
          <Card className="max-xl:col-span-2">
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
          <Card className="max-xl:col-span-2">
            <CardHeader>
              <CardTitle>Прогресс чтения</CardTitle>
              <CardDescription>Статистика чтения</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <BarChart2 />
            </CardContent>
          </Card>
          <Card className="max-xl:col-span-2">
            <CardHeader>
              <CardTitle>Прогресс чтения</CardTitle>
              <CardDescription>Статистика чтения за год</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <BarChart3 />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
