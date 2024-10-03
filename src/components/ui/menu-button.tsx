"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"

interface MenuBurgerProps {
  items: { label: string; href: string }[]
}

export default function MenuBurger({ items }: MenuBurgerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative z-50"
      onClick={toggleMenu}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </Button>
  )
}
