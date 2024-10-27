import Link from "next/link"
import { Button } from "../ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../ui/tooltip"

export function ItemLink({
  children,
  href,
  content
}: {
  children: React.ReactNode
  href: string
  content: string
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {" "}
          <li>
            <Button variant={"outline"} size={"icon"} type="button" asChild>
              <Link href={href}>{children}</Link>
            </Button>
          </li>
        </TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
