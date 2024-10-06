"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Hammer, MessageCircleQuestion, Mic } from "lucide-react"
import React, { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"

interface SelectionMenuProps {
  onZip?: (text: string) => void
  onAsk?: () => void
  onSpeak?: (text: string) => void
  selectedText?: string
  setSelectedText?: React.Dispatch<React.SetStateAction<string>>
}

export default function SelectionMenu({
  onZip,
  onAsk,
  onSpeak
}: SelectionMenuProps) {
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [selectedText, setSelectedText] = useState("")
  const handleSelection = useCallback(() => {
    const selection = window.getSelection()
    if (selection && selection.toString().trim().length > 0) {
      const range = selection.getRangeAt(0)
      const rect = range.getBoundingClientRect()
      setSelectedText(selection.toString().trim())
      setMenuPosition({
        x: rect.left + rect.width,
        y: rect.top - 10
      })
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("selectionchange", handleSelection)
    return () => {
      document.removeEventListener("selectionchange", handleSelection)
    }
  }, [handleSelection])

  const handleCopy = () => {
    onZip && onZip(selectedText)
    setIsVisible(false)
  }

  const handleAsk = () => {
    onAsk && onAsk()
    setIsVisible(false)
  }

  const handleSpeak = () => {
    // const utterance = new SpeechSynthesisUtterance(selectedText)
    // window.speechSynthesis.speak(utterance)
    onSpeak && onSpeak(selectedText)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <TooltipProvider>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            style={{
              position: "fixed",
              left: menuPosition.x,
              top: menuPosition.y,
              transform: "translate(-50%, -100%)",
              zIndex: 1000
            }}
            className="flex space-x-2 rounded-lg border border-border bg-background p-2 shadow-lg"
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={handleCopy}>
                  <Hammer />
                  <span className="sr-only">Сжать</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Сжать</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={handleAsk}>
                  <MessageCircleQuestion />
                  <span className="sr-only">Спросить</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Спросить</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={handleSpeak}>
                  <Mic />
                  <span className="sr-only">Озвучить</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Озвучить</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        </TooltipProvider>
      )}
    </AnimatePresence>
  )
}
