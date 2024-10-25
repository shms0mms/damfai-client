import Balancer from "react-wrap-balancer"
import { Prettify } from "@/components/prettify"

export default function PrettifyPage() {
  return (
    <main className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h1 className="mb-2 bg-gradient-to-b from-foreground/25 to-foreground bg-clip-text text-center text-5xl font-bold text-transparent dark:from-neutral-200 dark:to-neutral-600 md:text-7xl">
          Damfai Prettify
        </h1>
        <p className="text-sm text-foreground/50">
          <Balancer>
            Решение для 2 этапа проекта Сириус.ИИ от команды Damfai
          </Balancer>
        </p>
      </div>
      <Prettify />
    </main>
  )
}
