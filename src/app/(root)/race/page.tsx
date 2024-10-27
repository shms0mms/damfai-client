import { Suspense } from "react"
import Balancer from "react-wrap-balancer"
import { LeaderBoard, LeaderBoardSkeleton } from "@/components/race/leaderboard"
import {
  MonthlyAuthor,
  MonthlyAuthorSkeleton
} from "@/components/race/monthly-author"

export default async function RacePage() {
  return (
    <div className="container flex min-h-[calc(100vh-var(--header-size))] flex-col items-center gap-10 py-10">
      <div className="mb-10 flex flex-col items-center text-center">
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
      <Suspense fallback={<MonthlyAuthorSkeleton />}>
        <MonthlyAuthor />
      </Suspense>
      <Suspense fallback={<LeaderBoardSkeleton />}>
        <LeaderBoard />
      </Suspense>
    </div>
  )
}
