import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {},

  client: {
    NEXT_PUBLIC_SERVER_URL: z.string().url().default("http://localhost:8000"),
    NEXT_PUBLIC_WS_URL: z.string().url().default("ws://localhost:8000")
  },

  runtimeEnv: {
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    NEXT_PUBLIC_WS_URL: process.env.NEXT_PUBLIC_WS_URL
  },
  // skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true
})
