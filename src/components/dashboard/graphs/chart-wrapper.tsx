import { PropsWithChildren } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

type ChartWrapperProps = {
  title: string
  subtitle: string
  className?: string
}

export default function ChartWrapper({
  title,
  subtitle,
  children,
  className
}: PropsWithChildren<ChartWrapperProps>) {
  return (
    <Card className={cn("col-span-2 max-xl:col-span-2", className)}>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="min-h-[340px] w-full max-md:min-h-[200px]">
        {children}
      </CardContent>
    </Card>
  )
}
