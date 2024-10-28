import { Favourite } from "@/types/favourites"
import { axiosWithAuth } from "@/api/interceptors"

class FavouriteService {
  private BASE_URL = "/bookmarks/favourite"

  async getAll() {
    return await axiosWithAuth.get<Favourite[]>(`${this.BASE_URL}/`)
  }
  async update(id: number) {
    return await axiosWithAuth.put(`${this.BASE_URL}/${id}`)
  }
  async is_favourite(id: number) {
    return await axiosWithAuth.get(`${this.BASE_URL}/is_favourite/${id}`)
  }
}

export const favouriteService = new FavouriteService()
