<<<<<<< HEAD
export default function Footer() {
    return <div></div>
}
=======
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
>>>>>>> 0e8d4dbaaacbf24ff45c87e7e3f5ee01c243a863
