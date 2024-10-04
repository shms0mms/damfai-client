import { Favourite } from "@/types/favourites"
import { axiosWithAuth } from "@/api/interceptors"

class FavouriteService {
  private BASE_URL = "/bookmarks/favourite"

  async getAll() {
    return await axiosWithAuth.get<Favourite[]>(this.BASE_URL)
  }
  async add(id: number) {
    return await axiosWithAuth.post(`${this.BASE_URL}?book_id=${id}`)
  }
}

export const favouriteService = new FavouriteService()
