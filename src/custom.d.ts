export {}

declare global {
  interface Error {
    response?: {
      status?: number
    }
  }
}
