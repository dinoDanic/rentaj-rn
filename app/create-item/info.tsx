import { CreateItemForm } from "@/features/listings/types"
import * as ImagePicker from "expo-image-picker"
import { ImagePickerAsset } from "expo-image-picker"
import { ref, uploadBytes } from "firebase/storage"
import { useFormContext } from "react-hook-form"
import { ScrollView, View } from "react-native"

import { storage } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { FormImages } from "@/components/ui/form/form-images"
import { FormInput } from "@/components/ui/form/form-input"
import { KeyboardAvoidingView } from "@/components/ui/keyboard-avoiding-view"

export default function CreateListingsIndexPage() {
  const form = useFormContext<CreateItemForm>()

  const check = async () => {
    const images = form.getValues("images")
    if (images && images.length > 0) {
      await Promise.all(images.map((image, index) => uploadImage(image, index)))
    }
  }

  const uploadImage = async (image: ImagePickerAsset, index: number) => {
    if (!image || !image.uri) {
      console.log(`Image or Image URI is missing for image at index ${index}`)
      return
    }

    console.log(`Uploading image at index ${index}: ${image.uri}`)

    try {
      const response = await fetch(image.uri)
      if (!response.ok) {
        console.log(`Failed to fetch image at index ${index}: ${response.statusText}`)
        return
      }

      const blob = await response.blob()
      const fileName = `image_${Date.now()}_${index}`
      const storageRef = ref(storage, fileName)

      console.log(`Uploading to ${storageRef.fullPath}`)
      await uploadBytes(storageRef, blob)
      console.log(`Uploaded image at index ${index}`)
    } catch (error) {
      console.error(`Error uploading image at index ${index}:`, error)
    }
  }

  return (
    <View className="flex-1 justify-between px-screen">
      <ScrollView className="pt-lg">
        <View className="gap-md">
          <FormImages<CreateItemForm> name="images" label="Dodaj slike" />
          <FormInput<CreateItemForm> name="name" label="Naziv" placeholder="Naziv proizvoda" />
          <FormInput<CreateItemForm>
            className="min-h-[200] p-md"
            name="description"
            label="Opis"
            placeholder="Opis proizvoda"
            multiline
          />
        </View>
      </ScrollView>
      <KeyboardAvoidingView>
        <Button onPress={check} title="Nastavi" />
      </KeyboardAvoidingView>
    </View>
  )
}
