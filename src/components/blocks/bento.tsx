import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons"
import { BellIcon, Share2Icon } from "lucide-react"
import { ROUTES } from "@/config/route.config"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Calendar } from "@/components/ui/calendar"
import Marquee from "@/components/ui/marquee"
import { AnimatedBeamDemo } from "../ui/animated-beam-demo"
import { AnimatedListDemo } from "../ui/animated-list-demo"
import { cn } from "@/lib/utils"

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto."
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data."
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation."
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages."
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain."
  }
]

const features = [
  {
    Icon: FileTextIcon,
    name: "Большой список книг",
    description:
      "На нашем сайте вы можете найти книги каждого жанра на свой вкус.",
    href: ROUTES.BOOKS,
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    )
  },
  {
    Icon: BellIcon,
    name: "Уведомления",
    description: "Получайте уведомления о прочтении книги.",
    href: "#",
    cta: "Learn more",
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
    name: "Каледнарь",
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
