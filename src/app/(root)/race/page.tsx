import { Suspense } from "react"
import Balancer from "react-wrap-balancer"
import { LeaderBoard } from "@/components/race/leaderboard"
import { Skeleton } from "@/components/ui/skeleton"
import { raceService } from "@/services/race.service"

export default async function RacePage() {
  return (
    <div className="container flex min-h-[calc(100vh-var(--header-size))] flex-col items-center gap-20 py-10">
      <div className="flex flex-col items-center text-center">
        <h1 className="mb-2 bg-gradient-to-b from-foreground/25 to-foreground bg-clip-text text-center text-5xl font-bold text-transparent dark:from-neutral-200 dark:to-neutral-600 md:text-7xl">
          Гонка
        </h1>
        <p className="max-w-96 text-sm text-foreground/50">
          <Balancer>
            Соревнуйтесь с другими пользователями, читая книги от автора этого
            месяца
          </Balancer>
        </p>
      </div>
      <div className="flex flex-col gap-7">
        <Suspense
          fallback={
            <div className="flex max-w-[30rem] flex-col items-center space-y-2">
              <h3 className="flex gap-2 text-lg">
                Автор месяца:
                <Skeleton className="h-6 w-24" />
              </h3>
              <p className="w-full space-y-1 text-sm text-foreground/50">
                <Skeleton className="h-5 w-44" />
                <Skeleton className="h-5 w-36" />
              </p>
            </div>
          }
        >
          <MontlyAuthor />
        </Suspense>
        <LeaderBoard />
      </div>
    </div>
  )
}

async function MontlyAuthor() {
  const authorResponse = await raceService.getMonthlyAuthor()

  return (
    <div className="max-w-[30rem] text-center">
      <h3 className="text-lg">
        Автор месяца: <strong>{authorResponse.author}</strong>
      </h3>
      <p className="text-sm text-foreground/50">{authorResponse.description}</p>
    </div>
  )
}
