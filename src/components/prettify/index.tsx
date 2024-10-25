"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { useSummarize } from "@/hooks/useSummarize"
import { Separator } from "./separator"
import { SummarizeForm } from "./summarize-form"
import { SummarizedText } from "./summarized-text"
import { type SummarizeFormSchema } from "@/lib/schemas"
import { cn } from "@/lib/utils"

export const Prettify = () => {
  const { data, isPending, mutate: summarize } = useSummarize()
  const [isSubmitted, setIsSubbmitted] = useState(false)

  const onSubmit = (data: SummarizeFormSchema) => {
    summarize(data)
    setIsSubbmitted(true)
  }

  return (
    <motion.div className="flex gap-8 rounded-xl border border-border p-6 max-lg:flex-col md:p-10">
      <SummarizeForm
        className={cn({
          "lg:self-center": isSubmitted
        })}
        onSubmit={onSubmit}
      />
      <AnimatePresence>
        {isSubmitted ? (
          <>
            <Separator size={100} className="self-center" />
            <SummarizedText data={data} isPending={isPending} />
          </>
        ) : null}
      </AnimatePresence>
    </motion.div>
  )
}
