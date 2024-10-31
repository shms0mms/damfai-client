import { Favourite } from "@/types/favourites"
import { axiosWithAuth } from "@/api/interceptors"

class FavouriteService {
  private BASE_URL = "/bookmarks"

  async getAll() {
    return await axiosWithAuth.get<Favourite[]>(`${this.BASE_URL}/favourite`)
  }
  async update(id: number) {
    return await axiosWithAuth.put(`${this.BASE_URL}/favourite/${id}`)
  }
  async is_favourite(id: number) {
    return (await axiosWithAuth.get(`${this.BASE_URL}/is_favourite/${id}`)).data
  }
}

export const favouriteService = new FavouriteService()
