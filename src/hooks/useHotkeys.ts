import { createId } from "@paralleldrive/cuid2"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export type Hotkey = {
  symbol: string
  key: string
  text: string
  id: string
  action: () => void
}
const useHotkeys = () => {
  const { push } = useRouter()
  const keys = [
    {
      symbol: "⌘",
      key: "Control+d",
      text: "Перейти на дашборд",
      id: createId(),
      action: () => void push("/dashboard")
    }
  ]
  useEffect(() => {
    if (!localStorage.getItem("hotkeys")) {
      const hotkeys = keys.map(k => ({ ...k, action: k.action.toString() }))

      localStorage.setItem("hotkeys", JSON.stringify(hotkeys))
    }
  }, [keys])

  const storageKeys: Hotkey[] =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("hotkeys")!)
      : []

  const embedKeys = storageKeys?.length
    ? storageKeys?.map(s => ({
        ...s,
        action: eval("(" + s.action + ")")
      }))
    : []

  const [hotkeys, setHotkeys] = useState<Hotkey[]>(embedKeys)
  useEffect(() => {
    if (hotkeys?.length) {
      const keys = hotkeys.map(k => ({ ...k, action: k.action.toString() }))

      localStorage.setItem("hotkeys", JSON.stringify(keys))
    }
  }, [hotkeys])
  return {
    hotkeys,
    setHotkeys
  }
}

export default useHotkeys
