import { MotionProps, motion } from "framer-motion"
import { type FC, useMemo } from "react"
import { useMediaQuery } from "usehooks-ts"
import { CopyButton } from "@/components/ui/copy-button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { randomNumber } from "@/lib/utils"

type SummarizedTextProps = {
  isPending: boolean
  data: { text: string } | undefined
}

export const SummarizedText: FC<SummarizedTextProps> = ({
  isPending,
  data
}) => {
  const isSmallDevice = useMediaQuery("(max-width: 1024px)")

  const motionProps = useMemo(
    () =>
      (!isSmallDevice
        ? {
            key: "summarized-text-big",
            initial: { opacity: 0, width: 0 },
            animate: { opacity: 1, width: 450 },
            exit: { opacity: 0, width: 0 }
          }
        : { key: "summarized-text-small" }) satisfies MotionProps & {
        key: string
      },
    [isSmallDevice]
  )

  return (
    <motion.div {...motionProps}>
      <h3 className="mb-4 text-sm text-foreground/50">
        Суммаризированный текст:
      </h3>
      {isPending || !data ? (
        <ScrollArea className="h-72">
          <SummarizeLoadingState {...motionProps} />
        </ScrollArea>
      ) : (
        <motion.div
          key="text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col"
        >
          <ScrollArea className="h-72">
            <p>{data.text}</p>
          </ScrollArea>
          <CopyButton text={data.text} />
        </motion.div>
      )}
    </motion.div>
  )
}

type SummarizeLoadingState = MotionProps

function SummarizeLoadingState(props: SummarizeLoadingState) {
  return (
    <motion.div key="loading" className="flex flex-wrap gap-2" {...props}>
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          className="h-4 animate-pulse rounded-full bg-muted"
          initial={{ opacity: 0, width: 0 }}
          animate={{
            opacity: 1,
            width: randomNumber(40, 200),
            transition: { delay: 0.25 * i }
          }}
          exit={{ opacity: 0, width: 0 }}
          key={i}
        ></motion.div>
      ))}
    </motion.div>
  )
}
