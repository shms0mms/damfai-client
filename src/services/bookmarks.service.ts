import { Bookmark } from "@/types/bookmarks"
import { axiosWithAuth } from "@/api/interceptors"

class BookmarksService {
  private BASE_URL = "/bookmarks"

  async getAll() {
    return await axiosWithAuth.get<Bookmark[]>(`${this.BASE_URL}/`)
  }
  async update(id: number, page: number) {
    return await axiosWithAuth.put(`${this.BASE_URL}/${page}`)
  }
  async is_bookmark(id: number) {
    return await axiosWithAuth.get(`${this.BASE_URL}/is_bookmark/${id}`)
  }
}

export const bookmarksService = new BookmarksService()
