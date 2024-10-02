import { type User } from "@/types/user"
import { axiosWithAuth } from "@/api/interceptors"

class UserService {
  private BASE_URL = "/auth"

  async update(user: User) {
    return await axiosWithAuth.put(`${this.BASE_URL}/update`, user)
  }
}

export const userService = new UserService()
