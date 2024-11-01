import { axiosDefault } from "@/api/interceptors"
import { LangEnum, LevelEnum } from "@/lib/schemas"

class SummarizeService {
  private BASE_URL = "/second_stage"

  async summarize(text: string, level: LevelEnum, lang: LangEnum) {
    return (
      await axiosDefault.get(
        `${this.BASE_URL}/sum_text?text=${text}&level=${level}&lang=${lang}`
      )
    ).data
  }
}

export const summarizeService = new SummarizeService()
