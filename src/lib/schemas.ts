import { z } from "zod"

const required_error = "Это поле обязательно для заполнения"

export const summarizeFormSchema = z.object({
  level: z.enum(["strong", "medium", "small"], {
    required_error
  }),
  text: z
    .string({ required_error })
    .min(24, { message: "Минимальная длина текста не менее 24 символов" })
})

export type SummarizeFormSchema = z.infer<typeof summarizeFormSchema>
