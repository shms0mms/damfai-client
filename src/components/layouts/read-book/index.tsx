import { type FC } from "react"

export const ReadBookLayout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="h-full w-full">{children}</div>
    </>
  )
}
