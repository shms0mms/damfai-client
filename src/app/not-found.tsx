import Link from "next/link"
import Balancer from "react-wrap-balancer"
import { Button } from "@/components/ui/button"
import { getMainNav } from "@/lib/main-nav"
import { cn } from "@/lib/utils"

export default function NotFoundPage() {
  const items = getMainNav("")
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="text-center text-xl sm:text-3xl">
        <Balancer>404 - Страница не найдена</Balancer>
      </h1>
      <p className="text-center text-sm max-sm:max-w-96">
        <Balancer>
          Попробуйте перейти на другую страницу или повторить запрос
        </Balancer>
      </p>
      <p className="mb-1 mt-4 md:mt-8">Перейти на</p>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-8">
        {items.map((item, i) => (
          <li key={item.title}>
            <Button
              asChild
              className={cn(
                "w-full md:h-10 md:rounded-md md:px-8",
                item.className
              )}
              variant={i === 0 ? "default" : "secondary"}
            >
              <Link href={item.href}>{item.title}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
