"use client"

import { type DialogProps } from "@radix-ui/react-dialog"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import LogoCircle from "../ui/logo-circle"
import ChappiChat from "./chappi-chat"

export function Chappi({ ...props }: DialogProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
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
    <div className="fixed bottom-6 right-6 max-2xl:static">
      <div className="flex flex-col items-end gap-4">
        {" "}
        <motion.div
          initial={{ opacity: 0, scale: 0, pointerEvents: "none" }}
          transition={{
            duration: 0.2
          }}
          className="origin-bottom-right overflow-hidden rounded-md"
          animate={open ? { opacity: 1, scale: 1, pointerEvents: "auto" } : {}}
        >
          <ChappiChat />
        </motion.div>
        <Button
          size="icon"
          className="h-14 w-14 rounded-[50%]"
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
