import { Lock } from "lucide-react"
import { useContext, useEffect } from "react"
import { toast } from "sonner"
import { AuthContext } from "@/components/providers/auth-profider"
import { Hotkey } from "./useHotkeys"

export const useHotkeysActions = (hotkeys: Hotkey[]) => {
  const { user } = useContext(AuthContext)
  const haveExtension = !!user?.extensions?.find(e => e.slug === "hotkeys")
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keydownKey = event.key
      const ctrl = event.ctrlKey ? "Control+" : ""
      const alt = event.altKey ? "Alt+" : ""
      const shift = event.shiftKey ? "Shift+" : ""
      const key = `${ctrl}${alt}${shift}${keydownKey}`
      if (key) {
        const hotkey =
          hotkeys?.find(h => {
            return h.key === key
          }) || null
        if (hotkey?.id) {
          if (!haveExtension) {
            event.preventDefault()
            toast.info(
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-yellow-500" /> Горячие клавиши
                доступны только с расширением
              </div>,
              {
                position: "top-center"
              }
            )
          } else {
            event.preventDefault()
            hotkey?.action?.()
          }
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [hotkeys, haveExtension])
}
