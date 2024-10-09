"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { FC, ReactNode, useRef } from "react"
import { cn } from "@/lib/utils"

type TextRevealByWordProps = {
  text: string
  className?: string
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef
  })
  const words = text.split(" ")

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p ref={targetRef} className={"flex flex-wrap p-5 md:p-8 lg:p-10"}>
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </p>
      </div>
    </div>
  )
}

type WordProps = {
  children: ReactNode
  progress: any
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [1, 0])
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  )
}
