import { Favourite } from "@/types/favourites"
import { axiosWithAuth } from "@/api/interceptors"

class FavouriteService {
  private BASE_URL = "/bookmarks/favourite"

  async getAll() {
    return await axiosWithAuth.get<Favourite[]>(`${this.BASE_URL}/`)
  }
  async update(id: number) {
    return await axiosWithAuth.put(`${this.BASE_URL}?book_id=${id}`)
  }
  async is_favourite(id: number) {
    return await axiosWithAuth.get(
      `${this.BASE_URL}/is_favourite?book_id=${id}`
    )
  }
}

export const favouriteService = new FavouriteService()
