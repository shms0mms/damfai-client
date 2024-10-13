"use client"

import { KeyboardIcon } from "lucide-react"
import { useContext, useState } from "react"
import useHotkeys from "@/hooks/useHotkeys"
import { AuthContext } from "@/components/providers/auth-profider"
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
import OnlyExtensionModal from "@/components/ui/only-extension-modal"
import { HotkeyModal } from "./modal"

export function Hotkeys() {
  const { user } = useContext(AuthContext)
  const { hotkeys, setHotkeys } = useHotkeys()
  const [isModalOpen, setIsModalOpen] = useState<string | undefined>()

  const handleSaveHotkey = (newHotkey: string, id: string) => {
    setHotkeys(p => {
      const copy = [...p]
      copy.find(h => h.id === id)!.key = newHotkey
      return copy
    })
  }
  const [openEx, setOpenEx] = useState(false)
  const haveEx = !!user?.extensions?.find(e => e.slug === "hotkeys")
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
                    onClick={() =>
                      haveEx ? setIsModalOpen(h.id) : setOpenEx(true)
                    }
                    className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-sm bg-muted/50 px-4 py-2"
                  >
                    <div className="w-full">{h.text}</div>
                    <kbd className="pointer-events-none flex select-none items-center gap-1 whitespace-nowrap rounded-sm border bg-muted px-2 py-1 font-mono text-base font-medium">
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
      <OnlyExtensionModal
        extensionId="1"
        extensionName="Горячие клавиши"
        extensionDescription="Вы можете настраивать горячие клавиши под себя"
        isOpen={openEx}
        setIsOpen={setOpenEx}
      />
    </>
  )
}
