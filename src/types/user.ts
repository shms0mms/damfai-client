export type User = {
  id: number
  name: string
  surname: string
  email: string
  dob: Date
  created_at: Date
}

export type UserSignIn = {
  email: string
  password: string
}
