import { z } from "zod"

export type ZodType<T> = {
  [K in keyof T]: z.ZodTypeAny
}
