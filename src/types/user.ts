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

export type UserSignUp = {
  name: string
  surname: string
  email: string
  dob: Date
  /** !!! In hours !!! */
  readingTime: number
}

export type UserUpdate = {
  name?: string
  surname?: string
  email?: string
  password?: string
}
