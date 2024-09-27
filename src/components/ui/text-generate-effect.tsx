"use client"

import { motion, stagger, useAnimate } from "framer-motion"
import { useEffect } from "react"
import { cn } from "@/lib/utils"

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5
}: {
  words: string
  className?: string
  filter?: boolean
  duration?: number
}) => {
  const [scope, animate] = useAnimate()
  const wordsArray = words.split(" ")
  useEffect(() => {
    void animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none"
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2)
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-black opacity-0 dark:text-white"
              style={{
                filter: filter ? "blur(10px)" : "none"
              }}
            >
              {word}{" "}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn("text-2xl font-bold", className)}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide text-foreground">
          {renderWords()}
        </div>
      </div>
    </div>
  )
}
