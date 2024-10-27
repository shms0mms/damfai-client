"use client"

import { AnimatePresence, motion } from "framer-motion"
import {
  Angry,
  Check,
  Frown,
  Heart,
  LucideProps,
  Meh,
  Smile,
  X
} from "lucide-react"
import {
  type ForwardRefExoticComponent,
  createElement,
  useEffect,
  useState
} from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

type MoodText =
  | "Счастливый"
  | "Грустный"
  | "Нейтральный"
  | "Влюбленный"
  | "Сердитый"

type Mood = "happy" | "sad" | "neutral" | "lover" | "angry"

interface MoodTrackerProps {
  onMoodSelected?: (mood: Mood) => void
  delayBeforeShow?: number
}
type Moods = Record<
  Mood,
  {
    icon: ForwardRefExoticComponent<LucideProps>
    color: string
    text: MoodText
  }
>
const moodIcons = {
  happy: { icon: Smile, color: "text-yellow-500", text: "Счастливый" },
  sad: { icon: Frown, color: "text-blue-500", text: "Грустный" },
  neutral: { icon: Meh, color: "text-gray-500", text: "Нейтральный" },
  lover: { icon: Heart, color: "text-red-500", text: "Влюбленный" },
  angry: { icon: Angry, color: "text-orange-500", text: "Сердитый" }
} satisfies Moods

export function MoodTracker({
  onMoodSelected,
  delayBeforeShow = 5000
}: MoodTrackerProps) {
  const [showMoodTracker, setShowMoodTracker] = useState(false)
  const [showCheckmark, setShowCheckmark] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMoodTracker(true)
    }, delayBeforeShow)

    return () => clearTimeout(timer)
  }, [delayBeforeShow])

  const handleMoodSelection = (mood: Mood, text: MoodText) => {
    setShowCheckmark(true)

    setTimeout(() => {
      setShowMoodTracker(false)
      onMoodSelected?.(mood)
      toast.success(`Ваше настроение "${text}" сохранено!`)
    }, 1500)
  }

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
                {(Object.keys(moodIcons) as Mood[]).map(mood => (
                  <Button
                    key={mood}
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      handleMoodSelection(mood, moodIcons[mood].text)
                    }
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
