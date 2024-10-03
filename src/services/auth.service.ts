import type { User, UserSignIn, UserSignUp } from "@/types/user"
import { axiosDefault, axiosWithAuth } from "@/api/interceptors"

type ResponseWithToken = {
  token: string
}
class AuthService {
  private BASE_URL = "/auth"

  async me() {
    const response = await axiosWithAuth.get<User>(`${this.BASE_URL}/me`)
    return response.data
  }
  async register(data: UserSignUp) {
    const dob = data.dob
      .toLocaleDateString()
      .replaceAll(".", "-")
      .split("-")
      .reverse()
      .join("-")

    const response = await axiosDefault.post<User & ResponseWithToken>(
      `${this.BASE_URL}/register`,
      { ...data, dob }
    )
    return response.data
  }
  async login(data: UserSignIn) {
    const response = await axiosDefault.post<ResponseWithToken>(
      `${this.BASE_URL}/login`,
      data
    )
    return response.data
  }
}

export const authService = new AuthService()
