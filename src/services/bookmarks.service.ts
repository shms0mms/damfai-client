import { Bookmark } from "@/types/bookmarks"
import { axiosWithAuth } from "@/api/interceptors"

type Page = {
  id: number
}
class BookmarksService {
  private BASE_URL = "/bookmarks/"

  async getAll() {
    return await axiosWithAuth.get<Bookmark[]>(this.BASE_URL)
  }
  async add(id: number) {
    return await axiosWithAuth.post(`${this.BASE_URL}?page_id=${id}`)
  }
}

export const bookmarksService = new BookmarksService()
