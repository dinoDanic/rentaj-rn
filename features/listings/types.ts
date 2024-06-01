import { imageZod, ZodType } from "@/types"
import * as ImagePicker from "expo-image-picker"
import { z } from "zod"

export type CreateItemForm = {
  name: string
  description: string
  images: ImagePicker.ImagePickerAsset[]
}

export const createItemFormShema = z.object<ZodType<CreateItemForm>>({
  name: z.string().min(3),
  description: z.string().optional(),
  images: z.array(imageZod),
})
