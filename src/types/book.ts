import { Angry, Frown, Heart, LucideProps, Meh, Smile } from "lucide-react"
import { ForwardRefExoticComponent } from "react"
import { RangeValue } from "@/lib/books-filters"

export enum EmoteEnum {
  happy = "happy",
  sad = "sad",
  neutral = "neutral",
  lover = "lover",
  angry = "angry"
}

export type MoodText =
  | "Счастливый"
  | "Грустный"
  | "Нейтральный"
  | "Влюбленный"
  | "Сердитый"

export type Moods = Record<
  EmoteEnum,
  {
    icon: ForwardRefExoticComponent<LucideProps>
    color: string
    text: MoodText
  }
>
export const moodIcons = {
  happy: { icon: Smile, color: "text-yellow-500", text: "Счастливый" },
  sad: { icon: Frown, color: "text-blue-500", text: "Грустный" },
  neutral: { icon: Meh, color: "text-gray-500", text: "Нейтральный" },
  lover: { icon: Heart, color: "text-red-500", text: "Влюбленный" },
  angry: { icon: Angry, color: "text-orange-500", text: "Сердитый" }
} satisfies Moods

export type Book = {
  id: number
  title: string // can be filtered
  author: string // can be filtered
  desc: string
  image?: string
  writen_date?: Date
  chapters: number
  ratings: number // float, can be filtered
  ganres: string[] //

  // {id: number
  //   ganre: string
  // }[]

  progress: number
  is_favourite?: boolean
  age_of_book?: string
  emote: EmoteEnum
}
export type Chapter = {
  id: number
  title: string
  numberOfChapter: number
  pages: number
  lastNumberOfPage: number
}

export type BookComponent = Book & {
  icon: React.ReactNode
  isLoading?: boolean
}

export type Page = { id: number; numberOfPage: number; text: string }

export type BooksFilters = Record<string, string | RangeValue>
