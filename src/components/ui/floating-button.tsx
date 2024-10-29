"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ReactNode, useRef, useState } from "react"
import { useOnClickOutside } from "usehooks-ts"
import { cn } from "@/lib/utils"

type FloatingButtonProps = {
  className?: string
  children: ReactNode
  triggerContent: ReactNode
}

type FloatingButtonItemProps = {
  children: ReactNode
}

const list = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1
    }
  }
}

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 5 }
}

const btn = {
  visible: { rotate: "45deg" },
  hidden: { rotate: 0 }
}

function FloatingButton({
  className,
  children,
  triggerContent
}: FloatingButtonProps) {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  useOnClickOutside(ref, () => setIsOpen(false))

  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      <AnimatePresence>
        <motion.ul
          className="absolute bottom-14 flex flex-col items-center gap-2"
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={list}
        >
          {children}
        </motion.ul>
        <motion.div
          variants={btn}
          animate={isOpen ? "visible" : "hidden"}
          ref={ref}
          onClick={() => setIsOpen(!isOpen)}
        >
          {triggerContent}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function FloatingButtonItem({ children }: FloatingButtonItemProps) {
  return <motion.li variants={item}>{children}</motion.li>
}

export { FloatingButton, FloatingButtonItem }
