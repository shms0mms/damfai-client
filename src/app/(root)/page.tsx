"use client"

import Balance from "react-wrap-balancer"
import { siteConfig } from "@/config/site.config"
import { BentoDemo } from "@/components/blocks/bento"
import { FeaturesSection } from "@/components/blocks/features-section"
import { FlipWords } from "@/components/ui/flip-words"
import { Beam } from "@/components/ui/grid-beam"
import { LaptopScroll } from "@/components/ui/laptop-scroll"
import { VelocityScroll } from "@/components/ui/scroll-based-velocity"
import { SparklesCore } from "@/components/ui/sparkles"
import { SparklesText } from "@/components/ui/sparkles-text"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

const words = [
  {
    text: "Добро пожаловать"
  },
  {
    text: "в систему"
  },
  {
    text: "damfAI"
  },
  {
    text: "для"
  },
  {
    text: "чтения"
  },
  {
    text: "книг"
  }
]
const sections = [
  {
    id: "1",
    content: (
      <div className="flex h-full w-full flex-col items-center py-6 md:py-10">
        <div className="absolute inset-0 h-screen w-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="h-full w-full"
            particleColorLight={"#fff"}
            particleColorDark={"#000"}
          />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="flex w-full items-center justify-center">
            {/* <span className="relative bg-gradient-to-b from-foreground/25 to-foreground bg-clip-text text-5xl font-bold text-transparent dark:from-neutral-200 dark:to-neutral-600 lg:text-7xl">
              {siteConfig.name}
            </span> */}

            <SparklesText text={siteConfig.name} />
          </h1>
          <Balance>
            <TextGenerateEffect
              words={siteConfig.description}
              duration={0.5}
              className="max-w-[40rem] !text-sm sm:!text-base md:!text-lg"
            />
          </Balance>
          <h2 className="text-4xl font-normal text-neutral-600 dark:text-neutral-400">
            Добро пожаловать в мир
            <span className="inline-block w-[100px]">
              <FlipWords
                words={["Чтения", "ИИ", "Chappi", "Нейросетей", "ML"]}
              />
            </span>
          </h2>
        </div>
        <LaptopScroll src={"/dashboard.jpeg"} />
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
        default_velocity={2}
        className="font-display text-center text-5xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:leading-[5rem]"
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

  // {
  //   id: "4",
  //   content: (
  //     <div className="relative flex h-full w-full items-center justify-center">
  //       <div className="flex flex-col items-center gap-3">
  //         <CardSkeletonContainer>
  //           <AISlider />
  //         </CardSkeletonContainer>

  //         {/* <div className="flex items-center gap-2">
  //           <Button size={"lg"} asChild>
  //             <Link href={ROUTES.RECOMMEND}>Начать</Link>
  //           </Button>
  //           <Button size={"lg"} variant={"outline"} asChild>
  //             <Link href={ROUTES.SIGN_IN}>Войти</Link>
  //           </Button>
  //         </div> */}
  //       </div>
  //     </div>
  //   )
  // }
]

export default function HomePage() {
  return (
    <div className="dark:bg-grid-white/[0.02] h-full">
      <div className="overflow-hidden">{sections[0]?.content}</div>

      <div className="">
        <div className="relative h-full w-full">
          <div className="h-full w-full">
            {sections.slice(1).map(s => (
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
