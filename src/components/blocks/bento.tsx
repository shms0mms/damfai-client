import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons"
import { BellIcon, Share2Icon } from "lucide-react"
import { ROUTES } from "@/config/route.config"
import { AnimatedBeamDemo } from "@/components/ui/animated-beam-demo"
import { AnimatedListDemo } from "@/components/ui/animated-list-demo"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Calendar } from "@/components/ui/calendar"
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

export const books = [
  {
    author: "Достоевский",
    title: "Идиот",
    body: "Это история о несчастном князе Мышкине, который всегда был «белой вороной», выделялся на фоне своего окружения красотой души и мягкостью, за что и был прозван идиотом."
  },
  {
    author: "Джордж Оруэлл",
    title: "1984",
    body: "Культовый роман Джорджа Оруэлла, действие которого разворачивается в тоталитарном, бюрократическом государстве, где процветает пропаганда и цензура, а тотальная слежка ведется круглосуточно, и где один человек решил побороться за право быть индивидуальной личностью."
  },
  {
    author: "Ф. С. Фицджеральд",
    title: "Великий Гэтсби",
    body: "Смесь любовной драмы и детектива с фешенебельными районами Нью‑Йорка в качестве декораций. Главный герой и рассказчик Ник Каррауэй перебирается на Средний Запад."
  },
  {
    author: "Рэй Брэдбери",
    title: "451° по Фаренгейту",
    body: "Научно-фантастический роман-антиутопия Рэя Брэдбери, изданный в 1953 году. Роман описывает американское общество близкого будущего, в котором книги находятся под запретом; «пожарные», к числу которых принадлежит и главный герой Гай Монтэг, сжигают любые найденные книги."
  },
  {
    author: "Маргарет Митчелл",
    title: "Унесенные ветром",
    body: "История о молодой южанке, дочери состоятельного владельца плантаций в Джорджии, чья беззаботная юность прекращается с началом Гражданской войны. В один миг девушке пришлось повзрослеть: мать умерла, отец болен, а родное поместье разграбили янки."
  }
]

const features = [
  {
    Icon: FileTextIcon,
    name: "Большой список книг",
    description:
      "На нашем сайте вы можете найти книги каждого жанра на свой вкус.",
    href: ROUTES.BOOKS,
    cta: "Подробнее",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {books.map((book, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-44 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {book.title}
                </figcaption>
                <figcaption className="font-norml text-xs dark:text-white">
                  {book.author}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{book.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    )
  },
  {
    Icon: BellIcon,
    name: "Уведомления",
    description: "Получайте уведомления о прочтении книги.",
    href: ROUTES.DASHBOARD,
    cta: "Подробнее",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    )
  },
  {
    Icon: Share2Icon,
    name: "Интеграции",
    description: "Вы можете читать книги вдвоём (в разработке).",
    href: ROUTES.DASHBOARD,
    cta: "Подробнее",
    className: "col-span-3 lg:col-span-2",
    background: <AnimatedBeamDemo />
  },
  {
    Icon: CalendarIcon,
    name: "Календарь",
    description: "Используйте календарь чтобы поставить цель чтения книги.",
    className: "col-span-3 lg:col-span-1",
    href: ROUTES.DASHBOARD,
    cta: "Подробнее",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    )
  }
]

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  )
}
