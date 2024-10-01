"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface Section {
  id: string
  content: React.ReactNode
  background: string
}

interface EnhancedSectionSliderProps {
  sections: Section[]
}

export default function EnhancedSectionSlider({
  sections
}: EnhancedSectionSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        goToNextSection()
      } else if (event.key === "ArrowUp") {
        goToPreviousSection()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const goToNextSection = () => {
    if (currentIndex < sections.length - 1) {
      setDirection(1)
      setCurrentIndex(prevIndex => prevIndex + 1)
    }
  }

  const goToPreviousSection = () => {
    if (currentIndex > 0) {
      setDirection(-1)
      setCurrentIndex(prevIndex => prevIndex - 1)
    }
  }

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      y: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      y: direction < 0 ? "100%" : "-100%",
      opacity: 0
    })
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.6 }
          }}
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: sections[currentIndex].background }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="w-full p-8"
          >
            {sections[currentIndex].content}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-y-0 left-0 flex items-center p-4">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPreviousSection}
          disabled={currentIndex === 0}
          className="rounded-full bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20"
          aria-label="Previous section"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center p-4">
        <Button
          variant="outline"
          size="icon"
          onClick={goToNextSection}
          disabled={currentIndex === sections.length - 1}
          className="rounded-full bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20"
          aria-label="Next section"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {/* {sections.map((_, index) => (
          <motion.div
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            initial={false}
            animate={{
              scale: index === currentIndex ? 1.2 : 1
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        ))} */}
      </div>
    </div>
  )
}
