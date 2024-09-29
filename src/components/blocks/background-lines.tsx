import React from "react"
import { BackgroundLines } from "../ui/background-lines"

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex flex-col items-center justify-center px-4 max-md:hidden">
      <h2 className="relative z-20 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text py-2 text-center font-sans text-2xl font-bold tracking-tight text-transparent dark:from-neutral-600 dark:to-white md:py-10 md:text-2xl lg:text-4xl">
        Развивайся вместе с <br /> Чаппи.
      </h2>
      <p className="mx-auto max-w-xl text-center text-sm text-neutral-700 dark:text-neutral-400 md:text-lg">
        Добро пожаловать в damfai, читай книги вместе с Чаппи.
      </p>
    </BackgroundLines>
  )
}
