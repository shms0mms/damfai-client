"use client"

import { useCallback, useEffect, useState } from "react"
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

type HotkeyModalProps = {
  hotkeyId: string | undefined
  isOpen: boolean
  onClose: () => void
  onSave: (hotkey: string | undefined, id: string | undefined) => void
}

export function HotkeyModal({
  hotkeyId,
  isOpen,
  onClose,
  onSave
}: HotkeyModalProps) {
  const [hotkey, setHotkey] = useState(hotkeyId)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault()
      const key = e.key
      const ctrl = e.ctrlKey ? "Control+" : ""
      const alt = e.altKey ? "Alt+" : ""
      const shift = e.shiftKey ? "Shift+" : ""
      const newHotkey = `${ctrl}${alt}${shift}${key}`
      setHotkey(newHotkey)
    },
    [hotkeyId, isOpen]
  )

  useEffect(() => {
    if (isOpen) window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown, isOpen])

  const handleSave = () => {
    onSave(hotkey, hotkeyId)
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
