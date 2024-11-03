"use client"

import { useMutation } from "@tanstack/react-query"
import { AnimatePresence, motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { createElement, useEffect, useState } from "react"
import { toast } from "sonner"
import { EmoteEnum, moodIcons } from "@/types/book"
import { Button } from "@/components/ui/button"
import { emotesBooksService } from "@/services/emotes-books.service"

interface MoodTrackerProps {
  onMoodSelected?: (mood: EmoteEnum) => void
  delayBeforeShow?: number
}

export function MoodTracker({
  onMoodSelected,
  delayBeforeShow: delayBeforeShowProp = 5000
}: MoodTrackerProps) {
  const [showMoodTracker, setShowMoodTracker] = useState(false)
  const [showCheckmark, setShowCheckmark] = useState(false)
  const { mutate } = useMutation({
    mutationFn: (emote: EmoteEnum) => emotesBooksService.saveEmote(emote),
    onSuccess: (data: { emote: EmoteEnum }) => {
      setShowCheckmark(true)
      setTimeout(() => {
        setShowCheckmark(false)
        setShowMoodTracker(false)
        onMoodSelected?.(data.emote)

        toast.success(
          `Ваше настроение "${moodIcons[data.emote].text}" сохранено!`
        )
      }, 1000)
    }
  })
  const delayBeforeShow = delayBeforeShowProp || 1000
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMoodTracker(true)
    }, delayBeforeShow)

    return () => clearTimeout(timer)
  }, [delayBeforeShow])

  return (
    <AnimatePresence>
      {showMoodTracker && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-4 right-4 z-50 rounded-lg bg-card p-4 text-card-foreground shadow-lg"
        >
          {!showCheckmark ? (
            <>
              <h3 className="mb-2 flex w-full items-center justify-between gap-2 text-lg font-semibold">
                Какое у вас настроение сегодня?
                <button type="button" onClick={() => setShowMoodTracker(false)}>
                  <X size={14} />
                </button>
              </h3>
              <div className="flex justify-between">
                {(Object.keys(moodIcons) as EmoteEnum[]).map(mood => (
                  <Button
                    key={mood}
                    variant="ghost"
                    size="icon"
                    onClick={() => mutate(mood)}
                  >
                    {createElement(moodIcons[mood].icon, {
                      className: `h-6 w-6 ${moodIcons[mood].color}`
                    })}
                    <span className="sr-only">{mood}</span>
                  </Button>
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex h-full items-center justify-center"
            >
              <Check className="h-12 w-12 text-green-500" />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
