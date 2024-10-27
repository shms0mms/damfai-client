import type { FC, PropsWithChildren } from "react"
import { useHotkeys } from "@/hooks/useHotkeys"
import { useHotkeysActions } from "@/hooks/useHotkeysActions"

export const HotkeysProvider: FC<PropsWithChildren> = ({ children }) => {
  const { hotkeys } = useHotkeys()
  useHotkeysActions(hotkeys)

  return children
}
