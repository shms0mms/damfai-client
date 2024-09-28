import { config } from "@/config"

export const Footer = () => {
  return (
    <footer className="border-t md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by {config.author}.
        </p>
      </div>
    </footer>
  )
}
