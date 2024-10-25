import { CopyIcon } from "@radix-ui/react-icons"
import { FC } from "react"
import { toast } from "sonner"
import { Button } from "./button"

type CopyButtonProps = {
  toast?: boolean
  text: string
}

export const CopyButton: FC<CopyButtonProps> = ({
  toast: isToast = true,
  text
}) => {
  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(text)
        if (isToast) toast.success(`Текст успешно скопирован в буфер обмена!`)
      }}
      variant="ghost"
      className="self-end"
      size="sm"
    >
      <CopyIcon /> Скопировать
    </Button>
  )
}
