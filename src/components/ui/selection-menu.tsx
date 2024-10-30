"use client"

import * as PopperJS from "@popperjs/core"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react"
import { cn } from "@/lib/utils"

type Side = "top" | "right" | "bottom" | "left"

type SelectionMenuProps = {
  children: React.ReactNode
  side?: Side
}

type SelectionMenuContextType = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  referenceElement: HTMLElement | null
  setReferenceElement: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  side: Side
}

const SelectionMenuContext = createContext<
  SelectionMenuContextType | undefined
>(undefined)

export function SelectionMenu({ children, side = "top" }: SelectionMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  )

  return (
    <SelectionMenuContext.Provider
      value={{ isOpen, setIsOpen, referenceElement, setReferenceElement, side }}
    >
      {children}
    </SelectionMenuContext.Provider>
  )
}

export function SelectionMenuTrigger({
  children
}: {
  children: React.ReactNode
}) {
  const context = useContext(SelectionMenuContext)
  if (!context)
    throw new Error("SelectionMenuTrigger must be used within a SelectionMenu")

  const { setIsOpen, setReferenceElement } = context

  const handleTextSelection = useCallback(() => {
    const selection = window.getSelection()
    if (selection && selection.toString().length > 0) {
      const range = selection.getRangeAt(0)
      // const rect = range.getBoundingClientRect()
      const span = document.createElement("span")
      range.insertNode(span)
      setReferenceElement(span)
      setIsOpen(true)
      span.remove()
    } else {
      setIsOpen(false)
    }
  }, [setIsOpen, setReferenceElement])

  const handleClick = () => setIsOpen(false)

  useEffect(() => {
    document.addEventListener("selectionchange", handleTextSelection)
    document.addEventListener("mousedown", handleClick)

    return () => {
      document.removeEventListener("selectionchange", handleTextSelection)
      document.removeEventListener("mousedown", handleClick)
    }
  }, [handleTextSelection, setIsOpen])

  return <div>{children}</div>
}

export function SelectionMenuContent({
  children,
  className
}: {
  className?: string
  children: React.ReactNode
}) {
  const context = useContext(SelectionMenuContext)
  if (!context)
    throw new Error("SelectionMenuContent must be used within a SelectionMenu")

  const { isOpen, referenceElement, side } = context
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )

  useEffect(() => {
    if (!referenceElement || !popperElement) return

    const popper = PopperJS.createPopper(referenceElement, popperElement, {
      placement: side,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 8]
          }
        }
      ]
    })

    return popper.destroy
  }, [referenceElement, popperElement, side])

  if (!isOpen) return null

  return (
    <div
      ref={setPopperElement}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
    >
      {children}
    </div>
  )
}

export function SelectionMenuItem({
  children,
  onSelect
}: {
  children: React.ReactNode
  onSelect: (value: string | undefined) => void
}) {
  const context = useContext(SelectionMenuContext)
  if (!context)
    throw new Error("SelectionMenuContent must be used within a SelectionMenu")
  const { referenceElement } = context

  return (
    <button
      className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      onClick={e => {
        e.preventDefault()
        onSelect(referenceElement?.innerText)
      }}
    >
      {children}
    </button>
  )
}
