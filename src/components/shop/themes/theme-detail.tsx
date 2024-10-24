"use client"

import { motion } from "framer-motion"
import { Check, Loader } from "lucide-react"
import { toast } from "sonner"
import { Extension } from "@/types/shop"
import { Button } from "@/components/ui/button"

export default function ThemeDetail({ extension }: { extension: Extension }) {
  return (
    <>
      <div className="flex w-full justify-end">
        <Button
          onClick={() => {
            toast(
              <div className="flex items-center justify-center">
                <Loader className="animate-spin" />
              </div>,
              {
                position: "top-center",
                className: "w-[60px] left-1/2 -translate-x-1/2",
                duration: 5000
              }
            )
            setTimeout(() => {
              toast.dismiss()
              toast(
                <div className="flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="flex h-full items-center justify-center"
                  >
                    <Check className="h-12 w-12 text-green-500" />
                  </motion.div>
                </div>,
                {
                  position: "top-center",
                  className: "w-[80px] left-1/2 -translate-x-1/2",
                  duration: 1000
                }
              )
            }, 5500)
          }}
          type="button"
        >
          {extension?.is_active ? "Уже в коллекции" : "Получить"}
        </Button>
      </div>
    </>
  )
}
