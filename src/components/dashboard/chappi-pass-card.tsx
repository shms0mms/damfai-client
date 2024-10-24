"use client"

import { LayoutGrid, Paintbrush } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { CardStack } from "../ui/card-stack"
import { ChappiCoin } from "../ui/chappi-coin"
import { CardWrapper } from "./card-wrapper"

export const CardStackItem = ({
  title,
  icon
}: {
  title: string
  icon: React.ReactNode
}) => {
  return (
    <div className="flex h-52 w-full flex-col gap-2">
      <h2 className="text-muted-foreground">{title}</h2>
      <div className="flex h-full w-full items-center justify-center">
        {icon}
      </div>
    </div>
  )
}
export default function ChappiPassCard() {
  return (
    <CardWrapper
      title="Чаппи-пасс"
      subtitle="Дорога чаппи помогает мотивировать себя читать книги и за одно получать разные плюшки :)"
    >
      <div className="flex min-h-[340px] w-full items-center justify-evenly px-20">
        {" "}
        <CardStack axis="Y" delay={3000} items={CARDS} />
        <CardStack axis="Y" delay={4500} items={CARDS} />
      </div>
      <div className="flex w-full justify-end">
        <Button asChild size={"lg"} type="button">
          <Link href={"/pass"}>Я готов!</Link>
        </Button>
      </div>
    </CardWrapper>
  )
}

const CARDS = [
  {
    children: (
      <CardStackItem icon={<ChappiCoin />} title="Получай чаппи-коины!" />
    ),
    id: 1
  },
  {
    children: (
      <CardStackItem
        icon={<Paintbrush size={100} />}
        title="Получай красивые темы"
      />
    ),
    id: 2
  },
  {
    children: (
      <CardStackItem
        icon={<LayoutGrid size={100} />}
        title="Получай удобный приватные расширения"
      />
    ),
    id: 3
  }
].map(c => ({
  ...c,
  className:
    "w-auto md:h-auto md:w-auto min-w-[300px] max-w-[300px] h-full min-h-[240px]"
}))
