import { Gift } from "lucide-react"
import { Reward } from "@/types/pass"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../ui/tooltip"

export const TableItem = ({ description, id, title, completed }: Reward) => {
  return (
    <>
      {" "}
      <div key={id} className="w-full">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {title}
            </figcaption>
            <figcaption className="font-norml text-xs dark:text-white">
              {description}
            </figcaption>
          </div>{" "}
          <TooltipProvider>
            {" "}
            <Tooltip>
              <TooltipTrigger>
                <Button
                  disabled={completed}
                  className="aspect-square h-auto w-8"
                  size={"icon"}
                  type="button"
                >
                  <Gift size={14} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Собрать награду</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <Separator />
    </>
  )
}
