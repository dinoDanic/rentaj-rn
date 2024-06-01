import { z } from "zod"

export type ZodType<T> = {
  [K in keyof T]: z.ZodTypeAny
}

export const imageZod = z.object({ assetId: z.string() })
