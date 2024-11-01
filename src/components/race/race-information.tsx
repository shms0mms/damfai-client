import { formatDate } from "date-fns"
import { type FC } from "react"
import Balancer from "react-wrap-balancer"
import { type ActiveRace } from "@/types/race"
import { Skeleton } from "@/components/ui/skeleton"

type RaceInformationProps = {
  race: ActiveRace
}

export const RaceInformation: FC<RaceInformationProps> = ({ race }) => {
  return (
    <div className="text-center">
      <h3 className="text-lg md:text-xl">
        Автор месяца: <strong>{race.author_name}</strong>
      </h3>

      <div className="flex items-center justify-center gap-2">
        <p className="max-w-[30rem] text-sm text-foreground/50">
          <Balancer>
            Старт: {formatDate(race.start_running_date, "dd.MM")}
          </Balancer>
        </p>

        <p className="max-w-[30rem] text-sm text-foreground/50">
          <Balancer>
            Завершение: {formatDate(race.end_running_date, "dd.MM")}
          </Balancer>
        </p>
      </div>
    </div>
  )
}

export const RaceInformationSkeleton = () => {
  return (
    <div>
      <h3 className="mb-2 flex gap-2 text-lg">
        Автор месяца:
        <Skeleton className="h-6 w-48" />
      </h3>
      <div className="w-full text-sm text-foreground/50">
        <Skeleton className="mb-1 h-5 w-28" />
        <Skeleton className="h-5 w-36" />
      </div>
    </div>
  )
}
