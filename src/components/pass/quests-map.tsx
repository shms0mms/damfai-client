"use client"

import { Crown, Sparkles, Star, Swords, Trophy, Zap } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Quest {
  id: number
  title: string
  description: string
  experience: number
  progress: number
  total: number
  icon: "trophy" | "star" | "zap" | "swords" | "crown"
  difficulty?: "easy" | "medium" | "hard"
}

const initialQuests: Quest[] = [
  {
    id: 1,
    title: "Победы",
    description: "Одержите победу в 3 матчах",
    experience: 500,
    progress: 3,
    total: 3,
    icon: "trophy",
    difficulty: "easy"
  },
  {
    id: 2,
    title: "Звёздный игрок",
    description: "Станьте звёздным игроком 2 раза",
    experience: 250,
    progress: 0,
    total: 2,
    icon: "star",
    difficulty: "medium"
  },
  {
    id: 3,
    title: "Урон",
    description: "Нанесите 20000 урона врагам",
    experience: 100,
    progress: 15000,
    total: 20000,
    icon: "zap",
    difficulty: "easy"
  },
  {
    id: 4,
    title: "Битвы",
    description: "Примите участие в 5 битвах",
    experience: 150,
    progress: 3,
    total: 5,
    icon: "swords",
    difficulty: "easy"
  },
  {
    id: 5,
    title: "Мастер",
    description: "Выиграйте 10 матчей подряд в рейтинговом режиме",
    experience: 1000,
    progress: 2,
    total: 10,
    icon: "crown",
    difficulty: "hard"
  },
  {
    id: 6,
    title: "Коллекционер",
    description: "Соберите 50 уникальных предметов",
    experience: 300,
    progress: 30,
    total: 50,
    icon: "star",
    difficulty: "medium"
  }
]

export function QuestsMap() {
  const [quests, setQuests] = useState<Quest[]>(initialQuests)

  const iconMap = {
    trophy: Trophy,
    star: Star,
    zap: Zap,
    swords: Swords,
    crown: Crown
  }

  const difficultyColor = {
    easy: "bg-green-500",
    medium: "bg-yellow-500",
    hard: "bg-red-500"
  }

  const handleClaimexperience = (id: number) => {
    setQuests(
      quests.map(quest =>
        quest.id === id ? { ...quest, progress: quest.total } : quest
      )
    )
  }

  return (
    <div className="container mx-auto mt-16 p-4">
      <h1 className="mb-6 text-center text-3xl font-bold">Квесты</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {quests.map(quest => {
          const Icon = iconMap[quest.icon]
          const isCompleted = quest.progress >= quest.total
          return (
            <Card key={quest.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`rounded-full p-2`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>{quest.title}</CardTitle>
                  </div>
                  {/* <Badge>{quest.difficulty}</Badge> */}
                </div>
              </CardHeader>
              <CardContent className="mb-2 flex-grow">
                <CardDescription>{quest.description}</CardDescription>
                <div className="mt-4 flex flex-col gap-1">
                  <Progress
                    value={(quest.progress / quest.total) * 100}
                    className="h-2"
                  />
                  <p className="mt-1 text-right text-sm">
                    {quest.progress} / {quest.total}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center">
                  <Sparkles className="mr-1 h-5 w-5 text-yellow-500" />
                  <span className="font-bold">{quest.experience}</span>
                </div>
                <Button
                  onClick={() => handleClaimexperience(quest.id)}
                  disabled={true}
                  variant={isCompleted ? "default" : "secondary"}
                >
                  {isCompleted ? "Выполнено" : "Выполнить"}
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
