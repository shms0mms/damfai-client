"use client"

import { ArrowRight } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export const DownloadAppButton = () => {
  return (
    <Button
      onClick={() =>
        toast.error(
          "К сожалению на данный момент мобильное приложение в разработке и мы не можем предоставить вам доступ к скачиванию!",
          { position: "top-center" }
        )
      }
      className="group"
      size="lg"
    >
      Скачать приложение
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  )
}
