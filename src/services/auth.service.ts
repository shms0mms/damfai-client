import type { User, UserSignIn, UserSignUp, UserUpdate } from "@/types/user"
import { axiosDefault, axiosWithAuth } from "@/api/interceptors"

type ResponseWithToken = {
  token: string
}
class AuthService {
  private BASE_URL = "/auth"

  async me(): Promise<User> {
    const response = await axiosWithAuth.get<User>(`${this.BASE_URL}/me`)
    return response.data
  }
  async register(data: UserSignUp) {
    const dob = data.dob
      .toLocaleDateString()
      .replaceAll(".", "-")
      .replaceAll("/", "-")
      .split("-")
      .reverse()
      .join("-")

    console.log(dob)
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
  async update(data: UserUpdate) {
    return await axiosWithAuth.put<UserUpdate & ResponseWithToken>(
      `${this.BASE_URL}/update`,
      data
    )
  }
}

export const authService = new AuthService()
