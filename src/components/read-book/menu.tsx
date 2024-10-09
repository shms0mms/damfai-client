import { Squash as Hamburger } from "hamburger-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import { Button } from "../ui/button"
import { Purpose } from "./purpose"
import { cn } from "@/lib/utils"

export function Menu() {
  return (
    <div>
      <DropdownMenu>
        <TooltipProvider disableHoverableContent>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger className="flex items-center justify-center">
                <Hamburger size={16} />
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent side="bottom">Открыть меню</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DropdownMenuContent className="p-4" align="end" forceMount>
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "flex h-auto w-full items-center justify-start gap-3 rounded-sm border-0 px-2 py-1.5"
                    )}
                  >
                    Сменить формат
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={"start"} className="w-[215px]">
                  <DropdownMenuItem asChild>
                    <Link href={"?format=compressed"}>Сжатый формат</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={"?format=full"}>Полный формат</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Purpose onSubmit={() => {}} type="edit" />
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
