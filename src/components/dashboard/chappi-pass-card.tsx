import { LayoutGrid, MoveRight, Paintbrush } from "lucide-react"
import Link from "next/link"
import { CardStack, CardStackItem } from "@/components/ui/card-stack"
import { ChappiCoin } from "@/components/ui/chappi-coin"
import { CardWrapper } from "./card-wrapper"

export function ChappiPassCard() {
  return (
    <CardWrapper
      title={
        <div className="flex w-full items-center justify-between">
          Чаппи-пасс{" "}
          <Link href={"/pass"}>
            <MoveRight size={24} />
          </Link>
        </div>
      }
      subtitle="Дорога чаппи помогает мотивировать себя читать книги и за одно получать разные плюшки :)"
    >
      <div className="flex min-h-[340px] w-full items-center justify-center px-20">
        <CardStack axis="Y" delay={3000} items={CARDS} />
        <CardStack axis="Y" delay={5000} items={CARDS} />
      </div>
    </CardWrapper>
  )
}

const CARDS = [
  {
    children: (
      <CardStackItem
        icon={<ChappiCoin />}
        title="Зарабатывайте чаппи-коины для покупки тем и мерча!"
      />
    ),
    id: 1
  },
  {
    children: (
      <CardStackItem
        icon={<Paintbrush size={100} />}
        title="Кастомизируйте сайт благодаря темам"
      />
    ),
    id: 2
  },
  {
    children: (
      <CardStackItem
        icon={<LayoutGrid size={100} />}
        title="Получайте удобные приватные расширения"
      />
    ),
    id: 3
  }
].map(c => ({
  ...c,
  className:
    "w-auto md:h-auto md:w-auto min-w-[300px] max-w-[300px] h-full min-h-[240px]"
}))
