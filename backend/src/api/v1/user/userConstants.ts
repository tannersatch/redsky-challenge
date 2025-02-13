import { z } from 'zod'

export const userSchema = z.object({
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  avatar: z.string(),
})
