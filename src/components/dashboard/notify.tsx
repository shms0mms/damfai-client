import { BookOpenIcon, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Callout } from "../ui/callout"

export function Notify() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
      {isOpen && (
        <Callout
          title={
            <span>
              Вы вчера не дочитали книгу{" "}
              <Link
                href={"/books/1"}
                className="border-b border-dashed border-foreground text-foreground"
              >
                {" "}
                Идиот{" "}
              </Link>
            </span>
          }
          className="flex h-auto w-full items-center justify-between gap-2 whitespace-normal border border-orange-300 px-4 py-3 text-orange-300"
          icon={<BookOpenIcon />}
        >
          <button type="button" onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </Callout>
      )}
    </>
  )
}
