"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import ReactCardFlip from "react-card-flip"
import type { Theme } from "@/types/shop"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { toCoins } from "@/lib/utils"

type ThemeCardProps = {
  theme: Theme
}

const themeExampleColors = [
  "backgroundColor",
  "textColor",
  "primaryColor",
  "primaryTextColor"
]
const themeExampleColorsLabels: Record<string, string> = {
  backgroundColor: "Фон",
  textColor: "Текст",
  primaryColor: "Основной (кнопки)",
  primaryTextColor: "Основной текст (кнопки)"
}

export function ThemeCard({ theme }: ThemeCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const colors = Object.entries(theme)
    .filter(([key]) => themeExampleColors.some(e => e === key))
    .map(([key, value]) => ({
      label: themeExampleColorsLabels[key],
      value: value as string
    }))

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card className="front">
        <CardHeader>
          <CardTitle className="text-lg">{theme.name}</CardTitle>
        </CardHeader>
        <CardContent className="mt-4 flex flex-col gap-3 px-0">
          <ul className="flex flex-col gap-2">
            {colors.map(({ label, value }) => (
              <li className="flex items-center gap-2" key={label}>
                <span
                  style={{
                    backgroundColor: value
                  }}
                  className="aspect-square w-5 rounded-full border border-solid"
                />
                {label}
              </li>
            ))}
          </ul>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-muted-foreground">
            {theme.description}
          </p>
        </CardContent>
        <CardFooter className="mt-4 flex w-full items-center justify-between gap-2">
          <span className="text-right font-semibold">
            {toCoins(theme.price)}
          </span>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              onClick={() => setIsFlipped(true)}
              variant="outline"
            >
              Осмотреть
            </Button>
            <Button size="sm" asChild>
              <Link href={`/shop/themes/${theme.id}`}>Купить</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Card
        className="back flex h-full flex-col"
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.textColor
        }}
      >
        <CardHeader>
          <CardTitle className="text-lg">{theme.name}</CardTitle>
        </CardHeader>
        <CardContent className="mt-4 h-full">
          «Зима близко...» — говорят Старки. «Новая книга Джорджа Мартина еще
          ближе!» — говорим мы.
          <Button
            className="mt-4 flex"
            size="lg"
            style={{
              backgroundColor: theme.primaryColor,
              color: theme.primaryTextColor
            }}
          >
            Кнопка
          </Button>
        </CardContent>
        <CardFooter className="flex w-full items-center justify-between gap-2">
          <span className="text-right font-semibold">
            {toCoins(theme.price)}
          </span>
          <div className="flex items-center gap-2 text-foreground">
            <Button
              size="sm"
              onClick={() => setIsFlipped(false)}
              variant="outline"
            >
              <ArrowLeft size={16} />
            </Button>
            <Button size="sm" asChild>
              <Link href={`/shop/themes/${theme.id}`}>Купить</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </ReactCardFlip>
  )
}
