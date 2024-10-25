"use client"

import { motion } from "framer-motion"
import Balancer from "react-wrap-balancer"
import { Prettify } from "@/components/prettify"
import { PrettifyLogo } from "@/components/ui/prettify-logo"

export default function PrettifyPage() {
  return (
    <main className="flex flex-col items-center gap-5">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{
            y: -40,
            opacity: 0
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.4
          }}
        >
          <PrettifyLogo />
        </motion.div>
        {/* <h1 className="mb-2 bg-gradient-to-b from-foreground/25 to-foreground bg-clip-text text-center text-5xl font-bold text-transparent dark:from-neutral-200 dark:to-neutral-600 md:text-7xl">
          Damfai Prettify
        </h1> */}

        <p className="text-sm text-foreground/50">
          <Balancer>
            Решение для 2 этапа проекта Сириус.ИИ от команды Damfai
          </Balancer>
        </p>
      </div>
      <Prettify />
    </main>
  )
}
