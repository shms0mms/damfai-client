import { User, UserSignIn } from "@/types/user"
import { axiosDefault, axiosWithAuth } from "@/api/interceptors"

class AuthService {
  private BASE_URL = "/auth"

  async me() {
    return await axiosWithAuth.get(`${this.BASE_URL}/me`)
  }
  async register(data: User) {
    return await axiosDefault.post(`${this.BASE_URL}/register`, data)
  }
  async login(data: UserSignIn) {
    return await axiosDefault.post(`${this.BASE_URL}/login`, data)
  }
}

export const authService = new AuthService()
