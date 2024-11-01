"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { LogoCircle } from "@/components/ui/logo-circle"
import { ChappiChat } from "./chappi-chat"
import { cn } from "@/lib/utils"

export function Chappi({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "Enter" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen(open => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])
  return (
    <div
      className={cn(`fixed bottom-20 right-6 max-2xl:static`, className)}
      style={{
        zIndex: open ? 50 : 1
      }}
    >
      <div className="flex flex-col items-end gap-4">
        {" "}
        <motion.div
          initial={{ opacity: 0, scale: 0, pointerEvents: "none" }}
          transition={{
            duration: 0.2
          }}
          className="origin-bottom-right"
          animate={open ? { opacity: 1, scale: 1, pointerEvents: "auto" } : {}}
        >
          <ChappiChat className="min-w-[400px] max-w-[400px]" />
        </motion.div>
        <Button
          size="icon"
          className="relative z-50 h-14 w-14 rounded-[50%]"
          variant="outline"
          onClick={() => setOpen(!open)}
          asChild
        >
          <LogoCircle size={46} />
        </Button>
      </div>
    </div>
  )
}
