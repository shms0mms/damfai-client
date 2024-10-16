import { Extension } from "@/components/ui/extension"
import { InDevelopment } from "@/components/ui/in-dev"
import { LetterPullup } from "@/components/ui/letter-pullup"
import { MarchCard } from "@/components/ui/merch-card"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { ThemeCard } from "@/components/ui/theme-card"
import { shopService } from "@/services/shop.service"

// TODO: Paid merch, Paid Themes, Paid books

export default async function Shop() {
  const extensions = await shopService.getExtensions()
  const themes = await shopService.getThemes()
  const merch = await shopService.getMockMerch()
  const title = "mb-7 text-5xl font-bold"

  const skeletons = Array.from({ length: 4 }, (_, i) => (
    <Skeleton key={i} className="min-h-[400px] w-full rounded-md" />
  ))
  return (
    <div className="flex h-full w-full flex-col gap-[100px]">
      <section className="container">
        <h1 className="text-center">
          <LetterPullup
            className="font-bold"
            words={"Магазин damfai"}
            delay={0.2}
          />
        </h1>
        <h2 className="flex w-full justify-center">
          <TextGenerateEffect
            words={
              "Покупка плюшек на сайте damfai за игровую валюту Чаппи-Коин! Учавствуй в гонках, побеждай, читай больше, отвечай на вопросы - получай монетки"
            }
            duration={0.5}
            className="max-w-[37rem] text-center !text-sm font-normal sm:!text-base md:!text-lg"
          />
        </h2>
      </section>
      <section className="container">
        <h2 className={title}>Расширения</h2>

        <div className="grid grid-cols-4 gap-4">
          {extensions?.length
            ? extensions.map(e => <Extension key={e.id} {...e} />)
            : skeletons}
        </div>
      </section>
      <Separator />
      <section className="container">
        <h2 className={title}>Темы</h2>
        <div className="grid w-full grid-cols-4 gap-4">
          {themes?.length
            ? themes.map(theme => <ThemeCard key={theme.id} theme={theme} />)
            : null}
        </div>
      </section>
      <Separator />
      <section className="container relative [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:content-['']">
        {/* <h2 className="mb-4 text-2xl text-muted-foreground/30">
          Мерч от компании
        </h2> */}
        <div className="grid h-full w-full grid-cols-4 gap-4">
          {merch?.length
            ? merch.map(e => <MarchCard key={e.id} {...e} />)
            : skeletons}
        </div>
        <InDevelopment />
      </section>
    </div>
  )
}
