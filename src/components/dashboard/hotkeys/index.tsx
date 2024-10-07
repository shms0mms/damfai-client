import { createId } from "@paralleldrive/cuid2"
import { KeyboardIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import HotkeyModal from "./modal"

type Hotkey = {
  symbol: string
  key: string
  text: string
  id: string
}
export default function Hotkeys() {
  const keys = [
    {
      symbol: "⌘",
      key: "Ctrl+D",
      text: "Перейти на дашборд",
      id: createId()
    },
    {
      symbol: "⌘",
      key: "Ctrl+Enter",
      text: "Вызвать Чаппи",
      id: createId()
    }
  ]
  useEffect(() => {
    localStorage.setItem("hotkeys", JSON.stringify(keys))
  }, [])
  const storageKeys: Hotkey[] =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("hotkeys")!)
      : []
  const [hotkeys, setHotkeys] = useState<Hotkey[]>(storageKeys)
  useEffect(() => {
    if (hotkeys.length) localStorage.setItem("hotkeys", JSON.stringify(hotkeys))
  }, [hotkeys])
  const [isModalOpen, setIsModalOpen] = useState<string | undefined>()
  const handleSaveHotkey = (newHotkey: string, id: string) => {
    setHotkeys(p => {
      const copy = structuredClone(p)
      copy.find(h => h.id === id)!.key = newHotkey
      return copy
    })
  }
  return (
    <>
      {" "}
      <Dialog>
        <DialogTrigger asChild>
          <Button size={"icon"} variant="outline">
            <KeyboardIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Горячие клавиши</DialogTitle>
            <DialogDescription>
              Поставьте себе кастомные горячие клавиши
            </DialogDescription>
          </DialogHeader>
          <div className="flex h-full w-full items-center">
            {hotkeys?.length ? (
              <ul className="flex h-full w-full flex-col gap-1">
                {hotkeys.map(h => (
                  <li
                    key={h.id}
                    onClick={() => setIsModalOpen(h.id)}
                    className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-sm bg-muted/50 px-4 py-2"
                  >
                    <div className="w-full">{h.text}</div>
                    <kbd className="pointer-events-none flex select-none items-center gap-1 rounded-sm border bg-muted px-2 py-1 font-mono text-base font-medium">
                      {/* <span className="text-xs">{h?.symbol}</span>+ */}
                      {h.key}
                    </kbd>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex h-full min-h-[200px] w-full items-center justify-center text-muted-foreground">
                Пока горячих клавиш нет
              </div>
            )}
          </div>
          <DialogFooter className="sm:justify-start" />
        </DialogContent>
      </Dialog>
      <HotkeyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(undefined)}
        onSave={handleSaveHotkey}
      />
    </>
  )
}
