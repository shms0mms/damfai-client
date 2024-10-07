import { KeyboardIcon } from "lucide-react"
import { useEffect } from "react"
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

export default function Hotkeys() {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const hotkeys = [
    {
      symbol: "⌘",
      key: "K",
      text: "Отсосать олегу"
    },
    {
      symbol: "⌘",
      key: "Enter",
      text: "Вызвать Чаппи"
    }
  ]
  return (
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
        <div className="flex w-full items-center">
          <ul className="flex w-full flex-col gap-1">
            {hotkeys.map(h => (
              <li
                onClick={() => {}}
                className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-sm bg-muted/50 px-4 py-2"
              >
                {" "}
                <div className="w-full">{h.text}</div>
                <kbd className="pointer-events-none flex select-none items-center gap-1 rounded-sm border bg-muted px-2 py-1 font-mono text-base font-medium">
                  <span className="text-xs">{h.symbol}</span>
                  {h.key}
                </kbd>
              </li>
            ))}
          </ul>
        </div>
        <DialogFooter className="sm:justify-start" />
      </DialogContent>
    </Dialog>
  )
}
