"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

let interval: any

type Card = {
  id: number
  children: React.ReactNode
  className?: string
}

export const CardStackItem = ({
  title,
  icon
}: {
  title: string
  icon: React.ReactNode
}) => {
  return (
    <div className="flex h-52 w-full flex-col gap-2">
      <h2 className="text-muted-foreground">{title}</h2>
      <div className="flex h-full w-full items-center justify-center">
        {icon}
      </div>
    </div>
  )
}

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  axis = "X",
  delay,
  side = "left"
}: {
  items: Card[]
  offset?: number
  scaleFactor?: number
  axis?: "Y" | "X"
  delay?: number
  side?: "left" | "right"
}) => {
  const CARD_OFFSET = offset || 20
  const SCALE_FACTOR = scaleFactor || 0.06
  const DELAY = delay || 5000
  const [cards, setCards] = useState<Card[]>(items)

  useEffect(() => {
    startFlipping()

    return () => clearInterval(interval)
  }, [])
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards] // create a copy of the array
        newArray.unshift(newArray.pop()!) // move the last element to the front
        return newArray
      })
    }, DELAY)
  }

  return (
    <div className="relative flex h-60 w-60 items-center justify-center max-md:h-40 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className={cn(
              "absolute flex h-60 w-60 flex-col justify-between rounded-3xl border border-neutral-200 bg-background p-4 shadow-xl shadow-black/[0.1] dark:border-white/[0.1] dark:shadow-white/[0.05] max-md:h-40 max-md:w-40 md:h-60 md:w-96",
              card.className
            )}
            style={{
              transformOrigin: "top center"
            }}
            animate={
              axis === "X"
                ? side === "right"
                  ? {
                      right: index * -CARD_OFFSET,
                      scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                      zIndex: cards.length - index
                    }
                  : {
                      left: index * -CARD_OFFSET,
                      scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                      zIndex: cards.length - index
                    }
                : {
                    top: index * -CARD_OFFSET,
                    scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                    zIndex: cards.length - index //  decrease z-index for the cards that are behind
                  }
            }
          >
            {card.children}
          </motion.div>
        )
      })}
    </div>
  )
}
