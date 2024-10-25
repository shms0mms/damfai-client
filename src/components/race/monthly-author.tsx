import Balancer from "react-wrap-balancer"
import { Skeleton } from "@/components/ui/skeleton"
import { raceService } from "@/services/race.service"

export const MonthlyAuthor = async () => {
  const authorResponse = await raceService.getMonthlyAuthor()

  return (
    <div className="text-center">
      <h3 className="text-lg">
        Автор месяца: <strong>{authorResponse.author}</strong>
      </h3>
      <p className="max-w-[30rem] text-sm text-foreground/50">
        <Balancer>{authorResponse.description}</Balancer>
      </p>
    </div>
  )
}

export const MonthlyAuthorSkeleton = () => {
  return (
    <div>
      <h3 className="mb-2 flex gap-2 text-lg">
        Автор месяца:
        <Skeleton className="h-6 w-48" />
      </h3>
      <p className="w-full text-sm text-foreground/50">
        <Skeleton className="mb-1 h-5 w-28" />
        <Skeleton className="h-5 w-36" />
      </p>
    </div>
  )
}
