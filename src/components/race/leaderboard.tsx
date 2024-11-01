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
import { RaceInformation } from "./race-information"
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
  const race = await raceService.getActiveRace()
  const { topUsers, userRank } = await raceService.getLeaderBoard()

  const userReward = race.prizes.find(prize => prize.place === userRank.place)

  return (
    <>
      <RaceInformation race={race} />
      <Table wrapperClassName="w-full max-w-[60rem]">
        <TableCaption>Список лидеров этого месяца</TableCaption>
        <TableHeader>
          <TableRow>
            {leaderBoardHeader.map(head => (
              <TableHead
                key={head.content}
                className={cn("p-4", head.className)}
              >
                {head.content}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="">
          <TableRow className="bg-muted">
            <TableCell className="p-4">{userRank.place}</TableCell>
            <TableCell className="p-4">{userRank.name}</TableCell>
            <TableCell className="p-4">{userRank.points}</TableCell>
            <TableCell className="p-4 text-right">
              {userReward?.chappi_tokens ?? "-"}
            </TableCell>
          </TableRow>
          {topUsers.map((leader, i) => {
            const leaderReward = race.prizes.find(
              prize => prize.place === leader.place
            )

            return (
              <TableRow key={leader.id}>
                <TableCell className="p-4">{leader.place}</TableCell>
                <TableCell className="p-4">{leader.name}</TableCell>
                <TableCell className="p-4">{leader.points}</TableCell>
                <TableCell className="p-4 text-right">
                  {leaderReward?.chappi_tokens ?? "-"}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
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
