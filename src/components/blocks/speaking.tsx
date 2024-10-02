"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { Card, CardContent } from "../ui/card"
import { Toaster } from "../ui/sonner"
import { TypewriterEffectSmooth } from "../ui/typewriter-effect"
import { TypingAnimation } from "../ui/typing-animation"

const words = [
  {
    text: "Добро пожаловать"
  },
  {
    text: "в систему"
  },
  {
    text: "damfAI"
  },
  {
    text: "для"
  },
  {
    text: "чтения"
  },
  {
    text: "книг"
  }
]
export default function Speaking() {
  const html = (
    <div className="flex items-center gap-2">
      <TypingAnimation
        className="text-4xl font-bold text-black dark:text-white"
        text="Добро пожаловать в мир книг damfai с ассистентом Чаппи!"
      />
      <Image alt="speaking" width={60} height={60} src={"/speaking.gif"} />
    </div>
  )
  useEffect(() => {
    toast(html, {
      position: "top-right"
    })
  }, [])
  return <></>
}
