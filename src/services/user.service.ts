import { type User } from "@/types/user"

class UserService {
  private BASE_URL = "/auth"

  get(): Promise<User> {
    return new Promise(resolve =>
      resolve({
        id: 1,
        name: "John",
        surname: "Doe",
        email: "johndoe@example.com",
        dob: new Date()
      })
    )
  }
}

export const userService = new UserService()
