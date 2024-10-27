import { Leader } from "@/types/race"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { cn, randomNumber } from "@/lib/utils"
import { raceService } from "@/services/race.service"

const leaderBoardHeader = [
  {
    className: "w-8 font-medium",
    content: "Место"
  },
  {
    className: "w-[150px]",
    content: "Имя"
  },
  {
    className: "w-[150px]",
    content: "Кол-во очков"
  },
  {
    className: "w-[100px] text-right",
    content: "Награда"
  }
]

export const LeaderBoard = async () => {
  const [leaderboard, userPlace] = await Promise.all([
    // sorting by place
    new Promise<Leader[]>(async res =>
      res(
        (await raceService.getLeaderBoard()).sort((a, b) => a.place - b.place)
      )
    ),
    raceService.getUserPlace()
  ])

  return (
    <Table wrapperClassName="w-full max-w-[60rem]">
      <TableCaption>Список лидеров этого месяца</TableCaption>
      <TableHeader>
        <TableRow>
          {leaderBoardHeader.map(head => (
            <TableHead key={head.content} className={cn("p-4", head.className)}>
              {head.content}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="">
        <TableRow className="bg-muted">
          <TableCell className="p-4">{userPlace.place}</TableCell>
          <TableCell className="p-4">{userPlace.name}</TableCell>
          <TableCell className="p-4">{userPlace.points}</TableCell>
          <TableCell className="p-4 text-right">{userPlace.reward}</TableCell>
        </TableRow>
        {leaderboard.map((leader, index) => (
          <TableRow key={leader.id}>
            <TableCell className="p-4">{leader.place}</TableCell>
            <TableCell className="p-4">{leader.name}</TableCell>
            <TableCell className="p-4">{leader.points}</TableCell>
            <TableCell className="p-4 text-right">{leader.reward}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export const LeaderBoardSkeleton = () => {
  return (
    <Table className="mx-auto w-full max-w-[60rem]">
      <TableCaption>Список лидеров этого месяца</TableCaption>
      <TableHeader>
        <TableRow>
          {leaderBoardHeader.map(head => (
            <TableHead key={head.content} className={head.className}>
              {head.content}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: randomNumber(5, 10) }).map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <Skeleton className="h-9 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-9 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-9 w-full" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
