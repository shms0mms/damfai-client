import { Coin } from "./coin"
import { cn } from "@/lib/utils"

export const ToCoins = ({
  balance,
  className
}: {
  balance: number
  className?: string
}) => {
  const coins = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB"
  })
    .format(balance || 0)
    .replace("₽", "")

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {coins} <Coin />
    </div>
  )
}
