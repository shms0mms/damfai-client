import {
  BarChart2,
  Book,
  Heart,
  Home,
  Settings,
  Star,
  User
} from "lucide-react"
import { Progress } from "./progress"

export function PhoneMock() {
  return (
    <div className="relative h-[600px] w-[290px] overflow-hidden rounded-[40px] bg-white shadow-xl">
      <div className="flex justify-between bg-black px-5 py-2 text-xs text-white">
        <span>12:00</span>
        <div className="flex space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9zM10 7h4v7h-4z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
          </svg>
        </div>
      </div>

      {/* App content */}
      <div className="space-y-6 p-5 pb-20 text-background">
        <div className="flex items-center justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span className="text-lg font-bold">Damfai</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="rounded-xl bg-gray-100 p-4">
          <h3 className="text-lg font-bold">Чаппи</h3>
          <div className="mt-2 flex justify-between text-sm text-gray-500">
            <span>Читай в приложении</span>
            <span>70% прочитано</span>
          </div>
          <Progress value={70} className="mt-2" />
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="rounded-xl bg-gray-100 p-3">
            <BarChart2 className="mx-auto mb-2 h-8 w-8" />
            <span className="text-xs">Прогресс чтения</span>
          </div>
          <div className="rounded-xl bg-gray-100 p-3">
            <User className="mx-auto mb-2 h-8 w-8" />
            <span className="text-xs">Аналитика</span>
          </div>
          <div className="rounded-xl bg-gray-100 p-3">
            <Settings className="mx-auto mb-2 h-8 w-8" />
            <span className="text-xs">Настройки</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 rounded-xl bg-gray-100 p-3">
            <div className="flex h-16 w-12 items-center justify-center rounded-lg bg-primary/20">
              <Book className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <div className="font-semibold">Война и мир</div>
              <div className="text-sm text-gray-500">Лев Толстой</div>
              <div className="mt-1 flex items-center">
                <Star className="h-4 w-4 fill-current text-yellow-400" />
                <Star className="h-4 w-4 fill-current text-yellow-400" />
                <Star className="h-4 w-4 fill-current text-yellow-400" />
                <Star className="h-4 w-4 fill-current text-yellow-400" />
                <Star className="h-4 w-4 text-gray-300" />
                <span className="ml-1 text-xs text-gray-500">(4.0)</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 rounded-xl bg-gray-100 p-3">
            <div className="flex h-16 w-12 items-center justify-center rounded-lg bg-primary/20">
              <Book className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <div className="font-semibold">1984</div>
              <div className="text-sm text-gray-500">Джордж Оруэлл</div>
              <div className="mt-1 flex items-center">
                <Star className="h-4 w-4 fill-current text-yellow-400" />
                <Star className="h-4 w-4 fill-current text-yellow-400" />
                <Star className="h-4 w-4 fill-current text-yellow-400" />
                <Star className="h-4 w-4 fill-current text-yellow-400" />
                <Star className="h-4 w-4 fill-current text-yellow-400" />
                <span className="ml-1 text-xs text-gray-500">(5.0)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around border-t bg-white py-4 text-background">
        <Home className="h-6 w-6" />
        <Book className="h-6 w-6" />
        <Heart className="h-6 w-6" />
        <User className="h-6 w-6" />
      </div>
    </div>
  )
}
