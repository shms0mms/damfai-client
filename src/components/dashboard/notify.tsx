import { BookOpenIcon } from "lucide-react"
import Link from "next/link"
import { Callout } from "../ui/callout"

export function Notify() {
  return (
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
      className="flex h-auto w-full items-center gap-2 whitespace-normal border border-orange-200 px-4 py-3 text-orange-200"
      icon={<BookOpenIcon />}
    />
  )
}
