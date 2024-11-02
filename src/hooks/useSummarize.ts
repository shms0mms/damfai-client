import { useMutation } from "@tanstack/react-query"
import { SummarizeFormSchema } from "@/lib/schemas"
import { summarizeService } from "@/services/summarize.service"

export function useSummarize() {
  return useMutation({
    mutationFn: ({ text, level, lang }: SummarizeFormSchema) =>
      summarizeService.summarize(text, level, lang)
  })
}
