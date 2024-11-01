"use client"

import Link from "next/link"
import Balance from "react-wrap-balancer"
import { siteConfig } from "@/config/site.config"
import { BentoDemo } from "@/components/blocks/bento"
import { FeaturesSection } from "@/components/blocks/features-section"
import { Button } from "@/components/ui/button"
import { FlipWords } from "@/components/ui/flip-words"
import { Beam } from "@/components/ui/grid-beam"
import { Icons } from "@/components/ui/icons"
import { LaptopScroll } from "@/components/ui/laptop-scroll"
import { VelocityScroll } from "@/components/ui/scroll-based-velocity"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { cn } from "@/lib/utils"

export default function HomePage() {
  const SECTIONS = [
    {
      id: "1",
      content: (
        <div className="flex h-full w-full flex-col items-center py-6 md:py-10">
          <div>
            <h1 className="bg-gradient-to-b from-foreground/25 to-foreground bg-clip-text text-center text-5xl font-bold text-transparent dark:from-neutral-200 dark:to-neutral-600 md:text-7xl">
              {siteConfig.name}
            </h1>
            <Balance>
              <TextGenerateEffect
                words={siteConfig.description}
                duration={0.5}
                className="max-w-[40rem] !text-sm font-normal sm:!text-base md:!text-lg"
              />
            </Balance>
          </div>
          <div className="mt-8 flex flex-col items-center gap-8">
            <h2 className="text-xl font-normal text-neutral-600 dark:text-neutral-400 md:text-4xl">
              Добро пожаловать в мир
              <span className="inline-block">
                <FlipWords words={["Чтения", "ИИ", "с Чаппи", "Нейросетей"]} />
              </span>
            </h2>
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
              <Link href="/auth/sign-up">
                Начать
                {/* gives shiny effect on hover */}
                <span className="absolute inset-0 flex size-full justify-center [transform:skew(-14deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-14deg)_translateX(100%)]">
                  <span className="relative h-full w-8 bg-white/20 dark:bg-black/10" />
                </span>
              </Link>
            </Button>
          </div>
          <LaptopScroll
            badge={<Icons.icon width={40} height={40} />}
            src={"/dashboard.jpeg"}
            className="md:!pt-20"
          />
        </div>
      )
    },
    {
      id: "2",
      content: (
        <div className="relative flex h-full w-full flex-col justify-center">
          <Beam className="-mt-[5rem] hidden xl:ml-28 xl:block" />
          <h2 className="mb-4 text-center text-2xl font-bold md:mb-6 md:text-4xl">
            Наши возможности
          </h2>
          <FeaturesSection />
        </div>
      )
    },
    {
      id: "6",
      content: (
        <VelocityScroll
          text="DamfAI Chappi"
          defaultVelocity={2}
          className="font-display text-center text-5xl font-bold tracking-[-0.02em] text-black opacity-[0.03] drop-shadow-sm dark:text-white"
        />
      )
    },

    {
      id: "5",
      content: (
        <div>
          <BentoDemo />
        </div>
      )
    }
  ]
  return (
    <div className="dark:bg-grid-white/[0.02] h-full">
      <section className="overflow-hidden">{SECTIONS[0]?.content}</section>
      <div className="">
        <div className="relative h-full w-full">
          <div className="h-full w-full">
            {SECTIONS.slice(1).map(s => (
              <section
                className="flex w-full items-center justify-center py-20"
                key={s.id}
              >
                {s.content}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
