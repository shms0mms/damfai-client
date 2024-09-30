import Image from "next/image"
import Balance from "react-wrap-balancer"
import { siteConfig } from "@/config/site.config"
import { FeaturesSection } from "@/components/blocks/features-section"
import { Beam } from "@/components/ui/grid-beam"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"

const words = [
  {
    text: "Build"
  },
  {
    text: "awesome"
  },
  {
    text: "apps"
  },
  {
    text: "with"
  },
  {
    text: "Aceternity.",
    className: "text-blue-500 dark:text-blue-500"
  }
]
export default function HomePage() {
  return (
    <div className="dark:bg-grid-white/[0.02] relative mx-auto">
      <div className="px-4 py-20">
        <div className="mb-52 flex w-full flex-col">
          <section className="py-6 text-center md:py-10">
            <h1 className="bg-gradient-to-b from-foreground/25 to-foreground bg-clip-text text-5xl font-bold text-transparent dark:from-neutral-200 dark:to-neutral-600 lg:text-7xl">
              {siteConfig.name}
            </h1>
            <Balance>
              <TextGenerateEffect
                words={siteConfig.description}
                duration={0.5}
                className="max-w-[40rem] !text-sm sm:!text-base md:!text-lg"
              />
            </Balance>
          </section>

          <div className="container">
            <div className="flex items-center gap-2">
              <Image
                alt="speaking"
                width={300}
                height={300}
                src={"/speaking.gif"}
              />
              <TypewriterEffectSmooth words={words} />
            </div>
          </div>

          {/* <section className="relative pt-8 text-center md:pt-12">
            <div className="relative z-10">
              <h2 className="mb-2 text-xl font-bold md:mb-4 md:text-2xl">
                Готовы погрузиться в мир книг?
              </h2>
              <p className="mb-4 text-base md:mb-6 md:text-lg">
                Становитесь пользователем нашего сайта и получайте доступ к
                огромному количеству книг.
              </p>
              <Button
                size="lg"
                asChild
                className={cn(
                  "group relative overflow-hidden transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg",
                  // light mode
                  "bg-gradient-to-tr from-zinc-900 to-zinc-700 text-zinc-50 hover:shadow-zinc-500/30",
                  // dark mode
                  "dark:bg-gradient-to-tr dark:from-zinc-50 dark:to-zinc-100 dark:text-zinc-900 dark:hover:shadow-zinc-700/30"
                )}
              >
                <Link href="/auth/sign-in">
                  Начать
                  gives shiny effect on hover
                  <span className="absolute inset-0 flex size-full justify-center [transform:skew(-14deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-14deg)_translateX(100%)]">
                    <span className="relative h-full w-8 bg-white/20 dark:bg-black/10" />
                  </span>
                </Link>
              </Button>
            </div>
          </section>  */}
        </div>
        <section className="relative flex w-full flex-col justify-center">
          <Beam className="-mt-[5rem] hidden xl:ml-28 xl:block" />
          <h2 className="mb-4 text-center text-2xl font-bold md:mb-6 md:text-4xl">
            Наши возможности
          </h2>
          <FeaturesSection />
        </section>
      </div>
    </div>
  )
}
