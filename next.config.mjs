await import("./src/env.js")

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
