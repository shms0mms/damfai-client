import { BarChart2, Book, Download, Globe, Star, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneMock } from "@/components/ui/phone-mock"
import { DownloadAppButton } from "./download-app-button"

export function AppPromo() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative grid gap-12 lg:grid-cols-2 xl:grid-cols-3">
        <div className="space-y-8 xl:col-span-2">
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Удобнее в приложении
          </h2>
          <div
            className="absolute left-0 top-0 h-72 w-[70%] overflow-x-hidden bg-[rgb(54,157,253)] bg-opacity-20 opacity-55 blur-[337.4px]"
            style={{ transform: "rotate(45deg)" }}
          />
          <div className="grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-sm:grid-cols-1">
            <FeatureCard
              icon={<BarChart2 className="h-6 w-6 text-primary" />}
              title="Аналитика чтения"
              description="Отслеживайте свой прогресс и статистику чтения в реальном времени"
            />
            <FeatureCard
              icon={<Book className="h-6 w-6 text-primary" />}
              title="Библиотека всегда с вами"
              description="Доступ к книгам в любое время и в любом месте"
            />
            <FeatureCard
              icon={<Star className="h-6 w-6 text-primary" />}
              title="Персональные рекомендации"
              description="Получайте предложения книг на основе ваших интересов и истории чтения"
            />
            <FeatureCard
              icon={<Download className="h-6 w-6 text-primary" />}
              title="Быстрая синхронизация"
              description="Мгновенная синхронизация прогресса чтения между всеми вашими устройствами"
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-primary" />}
              title="Режим быстрого чтения"
              description="Увеличьте скорость чтения благодаря сжатию книги"
            />
            <FeatureCard
              icon={<Globe className="h-6 w-6 text-primary" />}
              title="Удобство пользования"
              description="С приложением читать книги станет в разы проще!"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">
              Начните читать прямо сейчас
            </h3>
            <p className="text-gray-600">
              Скачайте наше приложение и получите доступ к тысячам книг. Добро
              пожаловать в мир с Чаппи!
            </p>
            <DownloadAppButton />
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative z-10 w-[290px]">
            <PhoneMock />
          </div>
          <div className="absolute inset-0 rotate-3 scale-105 transform rounded-3xl bg-gradient-to-r from-primary/10 to-transparent" />
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="bg-muted py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-muted/25">
      <CardHeader className="flex flex-row items-center gap-1 px-3">
        {icon}
        <CardTitle className="flex items-center space-x-3">
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-2">
        <p className="text-sm text-foreground/40">{description}</p>
      </CardContent>
    </Card>
  )
}
