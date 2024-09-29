import { BackgroundLinesDemo } from "@/components/blocks/background-lines"

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="container h-full">
        <div className="relative grid h-full w-full grid-cols-2 max-md:grid-cols-1">
          <div className="relative z-10 flex h-full w-full items-center justify-center">
            {children}
          </div>
          <BackgroundLinesDemo />
        </div>
      </div>
    </>
  )
}
