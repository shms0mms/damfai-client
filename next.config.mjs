import { createJiti } from "jiti"
import { fileURLToPath } from "node:url"

const jiti = createJiti(fileURLToPath(import.meta.url))

// Import env here to validate during build. Using jiti we can import .ts files :)
await jiti.import("./src/env.ts")

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "api.bookmate.ru",
        protocol: "https",
        pathname: "/assets/books-covers/**"
      }
    ]
  }
}

export default nextConfig
