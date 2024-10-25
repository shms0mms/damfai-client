import { Extension } from "./shop"

export enum RoleEnum {
  user = "user",
  admin = "admin"
}
export type User = {
  id: number
  name: string
  surname: string
  email: string
  dob: Date
  created_at: Date
  extensions: Extension[]
  balance?: number
  role: RoleEnum
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
}

export type UserUpdate = {
  name?: string
  surname?: string
  email?: string
  password?: string
}
