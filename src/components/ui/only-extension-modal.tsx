"use client"

import { Lock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"

interface ExtensionModalProps {
  extensionSlug: string
  extensionName: string
  extensionDescription: string
  isOpen: boolean
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export function OnlyExtensionModal({
  extensionSlug,
  extensionName,
  extensionDescription,
  isOpen,
  setIsOpen
}: ExtensionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-yellow-500" />
            Доступно только с расширением
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 py-4">
          <h2>
            Расширение - <strong>{extensionName}</strong>
          </h2>
          <p className="text-base text-muted-foreground">
            {extensionDescription}
          </p>
        </div>
        <div className="flex justify-end">
          <Button asChild>
            <Link href={`/shop/extensions/${extensionSlug}`}>
              Узнать больше
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
