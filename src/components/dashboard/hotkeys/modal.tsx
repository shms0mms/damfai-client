"use client"

import React, { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface HotkeyModalProps {
  isOpen: string | undefined // id
  onClose: () => void
  onSave: (hotkey: string, id: string) => void
}

export default function HotkeyModal({
  isOpen,
  onClose,
  onSave
}: HotkeyModalProps) {
  const [hotkey, setHotkey] = useState(isOpen!)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault()
      const key = e.key
      const ctrl = e.ctrlKey ? "Ctrl+" : ""
      const alt = e.altKey ? "Alt+" : ""
      const shift = e.shiftKey ? "Shift+" : ""
      const newHotkey = `${ctrl}${alt}${shift}${key}`
      setHotkey(newHotkey)
    },
    [isOpen]
  )

  useEffect(() => {
    if (!!isOpen) window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown, isOpen])

  const handleSave = () => {
    onSave(hotkey, isOpen!)
    onClose()
  }

  return (
    <>
      <Dialog open={!!isOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Выбор горячей клавиши</DialogTitle>
            <DialogDescription>
              Нажмите комбинацию клавиш, которую вы хотите использовать в
              качестве горячей клавиши.
            </DialogDescription>
          </DialogHeader>
          <div>
            <Label htmlFor="hotkey">Горячая клавиша</Label>
            <div className="mt-1 flex">
              <Input
                id="hotkey"
                value={hotkey}
                readOnly
                className="flex-grow"
                placeholder="Зажмите клавишу"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              Отмена
            </Button>
            {!!hotkey && <Button onClick={handleSave}>Сохранить</Button>}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
