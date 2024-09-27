import { SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"

export const Search = () => {
  return (
    <div className="relative flex items-center">
      <Input placeholder="Гарри поттер..." className="w-full max-w-[300px]" />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full text-sm font-medium text-foreground/75 shadow-sm">
        <SearchIcon
          className="transition-colors duration-200 hover:text-foreground/75"
          size={18}
        />
      </button>
    </div>
  )
}
