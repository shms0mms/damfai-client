"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Copy, Share, Volume } from "lucide-react"
import React, { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"

interface SelectionPopupProps {
  onCopy?: (text: string) => void
  onShare?: (text: string) => void
  onSpeak?: (text: string) => void
}

export default function SelectionPopup({
  onCopy,
  onShare,
  onSpeak
}: SelectionPopupProps) {
  const [selectedText, setSelectedText] = useState("")
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  const handleSelection = useCallback(() => {
    const selection = window.getSelection()
    if (selection && selection.toString().trim().length > 0) {
      const range = selection.getRangeAt(0)
      const rect = range.getBoundingClientRect()
      setSelectedText(selection.toString().trim())
      setPopupPosition({
        x: rect.left + rect.width / 2,
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
    navigator.clipboard.writeText(selectedText)
    onCopy && onCopy(selectedText)
    setIsVisible(false)
  }

  const handleShare = () => {
    onShare && onShare(selectedText)
    setIsVisible(false)
  }

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(selectedText)
    window.speechSynthesis.speak(utterance)
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
              left: popupPosition.x,
              top: popupPosition.y,
              transform: "translate(-50%, -100%)",
              zIndex: 1000
            }}
            className="flex space-x-2 rounded-lg border border-border bg-background p-2 shadow-lg"
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={handleCopy}>
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Копировать</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Копировать</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={handleShare}>
                  <Share className="h-4 w-4" />
                  <span className="sr-only">Поделиться</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Поделиться</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={handleSpeak}>
                  <Volume className="h-4 w-4" />
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
