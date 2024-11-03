import { EmoteEnum } from "@/types/book"
import { axiosWithAuth } from "@/api/interceptors"

export class EmotesBooksService {
  private BASE_URL = "/emotes-books"

  async getEmotesBooks() {
    try {
      return (await axiosWithAuth.get(`${this.BASE_URL}/all`)).data
    } catch {
      return []
    }
  }
  async saveEmote(emote: EmoteEnum) {
    return (await axiosWithAuth.put(`${this.BASE_URL}/save/emote`, { emote }))
      .data
  }
}

export const emotesBooksService = new EmotesBooksService()
