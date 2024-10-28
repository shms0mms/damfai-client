"use client"

import { useQuery } from "@tanstack/react-query"
import { Sparkles } from "lucide-react"
import Link from "next/link"
import { ICON_MAP } from "@/types/pass"
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
import { Skeleton } from "../../ui/skeleton"
import { cn } from "@/lib/utils"
import { passService } from "@/services/pass.service"

export function QuestsMap() {
  const { data: quests, isLoading } = useQuery({
    queryKey: ["/pass/quests"],
    queryFn: () => passService.getQuests()
  })

  const handleClaimExperience = (id: number) => {
    // claim exp
  }

  return (
    <div className="container mx-auto mt-16 h-full w-full p-4">
      <h1 className="mb-6 text-center text-3xl font-bold">Квесты</h1>
      <div
        className={cn(
          "grid h-full w-full auto-rows-min grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
          {
            "md:grid-cols-1 lg:grid-cols-1": !quests?.length
          }
        )}
      >
        {quests?.length ? (
          quests?.map(quest => {
            const Icon = ICON_MAP[quest.icon]
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
                  </div>
                </CardHeader>
                <CardContent className="mb-2">
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
                    disabled={true}
                    variant={isCompleted ? "default" : "secondary"}
                  >
                    {isCompleted ? "Выполнено" : "Выполнить"}
                  </Button>
                </CardFooter>
              </Card>
            )
          })
        ) : isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="flex flex-col">
              <CardHeader className="mb-2 px-0">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`rounded-full`}>
                      <Skeleton className="aspect-square w-[40px]" />
                    </div>
                    <Skeleton className="h-[40px] w-[240px]" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mb-2 px-0">
                <Skeleton className="h-[24px] w-[80%]" />
                <div className="mt-2 flex flex-col gap-1">
                  <Skeleton className="h-[24px] w-[55%] rounded-lg" />
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Skeleton className="aspect-square w-[40px]" />
                  <Skeleton className="h-[40px] w-[200px]" />
                </div>
                <Skeleton className="h-[40px] w-[120px]" />
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <div className="text-center">
              <h2 className="text-3xl">Пока квестов нету</h2>
              <h3 className="text-muted-foreground">Заходите позже</h3>
            </div>
            <Button asChild>
              <Link href={"/books"}>Начать читать</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
