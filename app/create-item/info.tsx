import { CreateItemForm } from "@/features/listings/types"
import { router } from "expo-router"
import { useFormContext } from "react-hook-form"
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native"

import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { FormImages } from "@/components/ui/form/form-images"
import { FormInput } from "@/components/ui/form/form-input"

export default function CreateListingsIndexPage() {
  const form = useFormContext<CreateItemForm>()
  const { trigger } = form

  const check = async () => {
    const isValid = await trigger(["name", "description", "images"])

    if (isValid) {
      router.push(routes.createItemPrice)
    }
  }

  const keyboardVerticalOffset = Platform.OS === "ios" ? 120 : 0

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
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={keyboardVerticalOffset}>
        <Button onPress={() => check()} title="Nastavi" />
      </KeyboardAvoidingView>
    </View>
  )
}
