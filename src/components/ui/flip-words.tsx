"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export const FlipWords = ({
  words,
  duration = 3000,
  className
}: {
  words: string[]
  duration?: number
  className?: string
}) => {
  const [currentWord, setCurrentWord] = useState(words[0] ?? "word")
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const [containerWidth, setContainerWidth] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || (words[0] ?? "word")
    setCurrentWord(word)
    setIsAnimating(true)
  }, [currentWord, words])

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation()
      }, duration)
  }, [isAnimating, duration, startAnimation])

  useEffect(() => {
    // Update the container width whenever the word changes
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
    }
  }, [currentWord])

  return (
    <div
      className={cn("relative inline-block transition-all", className)}
      style={{ width: containerWidth }} // Animate width change
    >
      <AnimatePresence
        onExitComplete={() => {
          setIsAnimating(false)
        }}
      >
        <motion.div
          key={currentWord}
          ref={containerRef} // Reference to measure width
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -40,
            x: 40,
            filter: "blur(8px)",
            scale: 2,
            position: "absolute"
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          className={cn(
            "relative z-10 inline-block px-2 text-left text-neutral-900 dark:text-neutral-100",
            className
          )}
        >
          {currentWord.split(" ").map((word, wordIndex) => (
            <motion.span
              key={word + wordIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: wordIndex * 0.3,
                duration: 0.3
              }}
              className="inline-block whitespace-nowrap"
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={word + letterIndex}
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: wordIndex * 0.3 + letterIndex * 0.05,
                    duration: 0.2
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
