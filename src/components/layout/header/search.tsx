import { SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"

export const Search = () => {
  return (
    <div className="relative w-full max-w-[500px] overflow-hidden rounded-xl before:absolute before:-top-12 before:left-0 before:z-50 before:h-16 before:w-16 before:rounded-full before:bg-black/75 before:blur-[80px] before:content-[''] after:absolute after:-bottom-32 after:right-10 after:z-50 after:h-24 after:w-24 after:rounded-full after:bg-black/75 after:blur-[100px] after:content-[''] dark:before:bg-white dark:after:bg-white max-md:max-w-full">
      <Input
        placeholder="Книга..."
        className="relative w-full rounded-xl bg-background/50 transition-transform"
      />
      <button className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full p-2 text-sm font-medium text-foreground/75 shadow-sm">
        <SearchIcon
          className="transition-colors duration-200 hover:text-foreground/75"
          size={18}
        />
      </button>
    </div>
  )
}
