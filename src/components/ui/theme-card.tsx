"use client"

import { useMutation } from "@tanstack/react-query"
import { ArrowLeft } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useMemo, useState } from "react"
import ReactCardFlip from "react-card-flip"
import { toast } from "sonner"
import type { Theme } from "@/types/shop"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "./alert-dialog"
import { ToCoins } from "./to-coins"
import { themeService } from "@/services/themes.service"

type ThemeCardProps = {
  theme: Theme
}

const themeExampleColors = [
  "background",
  "foreground",
  "primary",
  "primaryForeground"
]
const themeExampleColorsLabels: Record<string, string> = {
  background: "Фон",
  foreground: "Текст",
  primary: "Основной (кнопки)",
  primaryForeground: "Основной текст (кнопки)"
}

export function ThemeCard({ theme }: ThemeCardProps) {
  const { mutate: buyTheme } = useMutation({
    mutationFn: themeService.addThemeToUser,
    onSuccess: () => {
      toast.success(`${theme.name} успешно куплена`)
    },
    onError: () => {
      toast.error(`${theme.name} не удалось купить. Повторите позже.`)
    }
  })

  const { theme: currentTheme } = useTheme()
  const [isFlipped, setIsFlipped] = useState(false)

  // convert theme colors to hsl
  const themeColors = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(currentTheme === "dark" ? theme.dark : theme.light).map(
          ([key, value]) => [key, `hsl(${value})`]
        )
      ),
    [currentTheme, theme]
  )

  const colors = useMemo(
    () =>
      Object.entries(themeColors)
        .filter(([key]) => themeExampleColors.some(e => e === key))
        .map(([key, value]) => ({
          label: themeExampleColorsLabels[key],
          value: value as string
        })),
    [themeColors]
  )

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
            <ToCoins balance={theme.price} />
          </span>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              onClick={() => setIsFlipped(true)}
              variant="outline"
            >
              Осмотреть
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size="sm">Купить</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Вы уверены?</AlertDialogTitle>
                  <AlertDialogDescription>
                    С вашего баланса спишется {theme.price} Чаппи Коинов. Эта
                    операция не может быть отменена.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Отмена</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      buyTheme(theme.id)
                    }}
                  >
                    Купить
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardFooter>
      </Card>
      <Card
        className="back flex h-full flex-col"
        style={{
          backgroundColor: themeColors.background,
          color: themeColors.foreground
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
              backgroundColor: themeColors.primary,
              color: themeColors["primary-foreground"]
            }}
          >
            Кнопка
          </Button>
        </CardContent>
        <CardFooter className="flex w-full items-center justify-between gap-2">
          <span className="text-right font-semibold">
            <ToCoins balance={theme.price} />
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
