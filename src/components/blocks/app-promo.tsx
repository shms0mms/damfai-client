import {
  ArrowRight,
  BarChart2,
  Book,
  Download,
  Globe,
  Star,
  Zap
} from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneMock } from "../ui/phone-mock"

export default function AppPromo() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 xl:grid-cols-3">
        <div className="space-y-8 xl:col-span-2">
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Удобнее в приложении
          </h2>
          <div className="grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-sm:grid-cols-1">
            <FeatureCard
              icon={<BarChart2 className="h-8 w-8 text-primary" />}
              title="Аналитика чтения"
              description="Отслеживайте свой прогресс и статистику чтения в реальном времени"
            />
            <FeatureCard
              icon={<Book className="h-8 w-8 text-primary" />}
              title="Библиотека всегда с вами"
              description="Доступ к книгам в любое время и в любом месте"
            />
            <FeatureCard
              icon={<Star className="h-8 w-8 text-primary" />}
              title="Персональные рекомендации"
              description="Получайте предложения книг на основе ваших интересов и истории чтения"
            />
            <FeatureCard
              icon={<Download className="h-8 w-8 text-primary" />}
              title="Быстрая синхронизация"
              description="Мгновенная синхронизация прогресса чтения между всеми вашими устройствами"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-primary" />}
              title="Режим быстрого чтения"
              description="Увеличьте скорость чтения благодаря сжатию книги"
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-primary" />}
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
            <Button
              onClick={() =>
                toast(
                  "К сожалению на данный момент мобильное приложение в разработке и мы не можем предоставить вам доступ к скачиванию!",
                  { position: "top-center" }
                )
              }
              className="group"
              size="lg"
            >
              Скачать приложение
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
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
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-3">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
