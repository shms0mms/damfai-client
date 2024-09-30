import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {},

  client: {
    SERVER_URL: z.string().url().default("http://localhost:8000")
  },

  runtimeEnv: {
    SERVER_URL: process.env.SERVER_URL
  },
  // skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true
})
