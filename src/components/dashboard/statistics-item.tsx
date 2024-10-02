import { type StatisticsItem } from "@/types/statistics"
import { Skeleton } from "@/components/ui/skeleton"

export default function StatisticsItem({
  count,
  title,
  isLoading
}: StatisticsItem & { isLoading?: boolean }) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-muted-foreground">{title}</p>
      <div className="text-3xl font-bold">
        {isLoading ? <Skeleton className="h-[20px] w-[100px]" /> : count}
      </div>
    </div>
  )
}
