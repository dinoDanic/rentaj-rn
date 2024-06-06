import { Category } from "@/gql/generated/graphql"
import { imageZod, ZodType } from "@/types"
import * as ImagePicker from "expo-image-picker"
import { z } from "zod"

export type CreateItemForm = {
  name: string
  description: string
  images: ImagePicker.ImagePickerAsset[]
  category?: Category
  searchCategoryQuery: string
  screenName: string
  pricePerDay: number
}

export const createItemFormShema = z.object<ZodType<CreateItemForm>>({
  name: z.string().min(3),
  description: z.string().optional(),
  images: z.array(imageZod),
  category: z.object<ZodType<Category>>({ id: z.string(), name: z.string() }),
  searchCategoryQuery: z.string().optional(),
  screenName: z.string().optional(),
  pricePerDay: z.number(),
})
