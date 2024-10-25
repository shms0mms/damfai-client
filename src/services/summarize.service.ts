class SummarizeService {
  private BASE_URL = "/summarize"

  async summarize(text: string, level: string) {
    await new Promise(resolve => setTimeout(resolve, 10000))

    return Promise.resolve({
      text: `Это текст суммаризированный на уровне ${level}`
    })
  }
}

export const summarizeService = new SummarizeService()
