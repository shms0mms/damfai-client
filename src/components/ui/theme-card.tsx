import Link from "next/link"
import { Theme } from "@/types/shop"
import { Button } from "./button"
import { Card, CardContent, CardHeader } from "./card"
import { toPrice } from "@/lib/utils"

export default function ThemeCard({
  backgroundColor,
  description,
  id,
  name,
  price,
  textColor
}: Theme) {
  const item = "aspect-square w-5 border border-solid rounded-full"
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full items-center justify-between gap-2">
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 px-0">
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <span
              style={{
                backgroundColor
              }}
              className={item}
            />
            Цвет заднего фона
          </li>
          <li className="flex items-center gap-2">
            <span
              style={{
                backgroundColor: textColor
              }}
              className={item}
            />
            Цвет текста
          </li>
        </ul>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-muted-foreground">
          {description}
        </p>
        <div className="flex w-full items-center justify-between gap-2">
          {" "}
          <span className="text-right font-semibold">{toPrice(price)}</span>
          <Button size={"sm"} asChild>
            <Link href={`/shop/themes/${id}`}>Купить</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
