import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface CalloutProps {
  icon?: React.ReactNode
  title?: React.ReactNode
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

export function Callout({ title, children, icon, ...props }: CalloutProps) {
  return (
    <Alert {...props}>
      {icon && <span className="">{icon}</span>}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}
