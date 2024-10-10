import { Construction } from "lucide-react"
import { cn } from "@/lib/utils"

export default function InDevelopment({ className }: { className?: string }) {
  return (
    <>
      <div
        className={cn(
          "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-[200%] items-center gap-2 rounded-sm bg-muted-foreground p-4 text-white transition-all duration-500 ease-in-out hover:z-50 hover:scale-[1.1]",
          className
        )}
      >
        <Construction /> Данный раздел скоро появится!
      </div>
    </>
  )
}
