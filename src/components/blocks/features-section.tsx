import { IconEaseInOut, IconRouteAltLeft } from "@tabler/icons-react"
import { Album, ChartNoAxesColumn, Heart, Library, User } from "lucide-react"
import React from "react"
import { cn } from "@/lib/utils"

type TFeature = {
  title: string
  description: string
  icon: React.ReactNode
}

export function FeaturesSection() {
  const features: TFeature[] = [
    {
      title: "Просто и интуитивно",
      description:
        "Наше приложение довольно простое и интуитивное в использовании. Вы можете легко начать использовать его и не потерять время на настройку и конфигурацию.",
      icon: <IconEaseInOut />
    },
    {
      title: "Ищите уже существующие книги",
      description: "Найдите свою книгу, не волнуясь о добавлении своей.",
      icon: <IconRouteAltLeft />
    },
    {
      title: "Удобное использование",
      description:
        "Наш сервис специально постарался для графического интерфейса и теперь вы можете читать книги в любое время.",
      icon: <Heart />
    },
    {
      title: "Статистика",
      icon: <ChartNoAxesColumn />,
      description:
        "Статистика поможет вам отследить свою успеваемость и продуктивность."
    },
    {
      title: "Профиль",
      icon: <User />,
      description:
        "Способность просмотра книг в любое время и сохранение их в закладках для быстрого доступа."
    },
    {
      title: "Рекомендации",
      icon: <Library />,
      description: "Получайте рекомендации по книгам и подборкам для чтения."
    },
    {
      title: "Чаппи",
      icon: <></>, // иконка чаппи
      description: "Чаппи поможет обрезать текст, подготовить вопросы и прочее."
    },
    {
      title: "Закладки",
      icon: <Album />,
      description:
        "Сохраняйте свои книги в закладках для быстрого доступа в любое время."
    }
  ]
  return (
    <div className="bg-grid-black/[0.02] relative z-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}

type FeatureProps = TFeature & {
  index: number
}

const Feature = ({ title, description, icon, index }: FeatureProps) => {
  return (
    <div
      className={cn(
        "group/feature relative flex flex-col py-10 backdrop-blur-sm dark:border-neutral-800 lg:border-r",
        (index === 0 || index === 4) && "dark:border-neutral-800 lg:border-l",
        index < 4 && "dark:border-neutral-800 lg:border-b"
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-700" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  )
}
