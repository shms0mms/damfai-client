import { z } from "zod"

const required_error = "Это поле обязательно для заполнения"
export enum LevelEnum {
  small = "summary big",
  medium = "summary",
  strong = "summary brief"
}

export enum LangEnum {
  en = "to en",
  ru = "to ru",
  zh = "ro zh"
}

export const summarizeFormSchema = z.object({
  level: z.nativeEnum(LevelEnum, {
    required_error
  }),
  lang: z.nativeEnum(LangEnum, {
    required_error
  }),

  text: z
    .string({ required_error })
    .min(24, { message: "Минимальная длина текста не менее 24 символов" })
})

export type SummarizeFormSchema = z.infer<typeof summarizeFormSchema>
