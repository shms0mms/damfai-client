import { MotionProps, motion } from "framer-motion"
import { type FC, useMemo } from "react"
import { useMediaQuery } from "usehooks-ts"
import { CopyButton } from "../../components/ui/copy-button"
import { ScrollArea } from "../../components/ui/scroll-area"
import { randomNumber } from "../../lib/utils"

type SummarizedTextProps = {
  isPending: boolean
  data: { sum_text: string } | undefined
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
            initial: { opacity: 0, width: 0 },
            animate: { opacity: 1, width: 450 },
            exit: { opacity: 0, width: 0 }
          }
        : {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 }
          }) as MotionProps & {
        key: string
      },
    [isSmallDevice]
  )

  return (
    <motion.div className="min-h-full" {...motionProps}>
      <h3 className="mb-4 text-sm text-foreground/50">
        Суммаризированный текст:
      </h3>
      {isPending || !data ? (
        <ScrollArea className="h-72">
          <SummarizeLoadingState />
        </ScrollArea>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex min-h-full flex-col"
        >
          <ScrollArea className="min-h-full">
            <p data-testid="summarized-text">{data.sum_text}</p>
          </ScrollArea>
          <CopyButton text={data.sum_text} />
        </motion.div>
      )}
    </motion.div>
  )
}

type SummarizeLoadingStateProps = MotionProps

function SummarizeLoadingState(props: SummarizeLoadingStateProps) {
  return (
    <motion.div className="flex flex-wrap gap-2" {...props}>
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          className="h-4 animate-pulse rounded-full bg-foreground"
          initial={{ opacity: 0, width: 0 }}
          animate={{
            opacity: 1,
            width: randomNumber(40, 200),
            transition: { delay: 0.25 * i }
          }}
          key={i}
          exit={{ opacity: 0, width: 0 }}
        ></motion.div>
      ))}
    </motion.div>
  )
}
