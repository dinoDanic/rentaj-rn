import { CreateItemForm } from "@/features/listings/types"
import { Link, router } from "expo-router"
import { useFormContext } from "react-hook-form"
import { Alert, View } from "react-native"

import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { FormInput } from "@/components/ui/form/form-input"
import { Text } from "@/components/ui/text"

export default function CreateItemChooseCategoryPage() {
  const form = useFormContext<CreateItemForm>()

  const category = form.watch("category")

  const check = async () => {
    const isValid = await form.trigger(["category"])

    if (isValid) {
      router.push(routes.createItemInfo)
    } else {
      Alert.alert("Kategorija je obavezna")
    }
  }

  const openList = () => router.push(`${routes.createItem}/0`)

  if (category) {
    return (
      <View className="flex-1 justify-between p-screen">
        <View className="flex-1 items-center justify-center">
          <Text>Odabrana kategorija</Text>
          <Text className="font-bold">{category.name}</Text>
        </View>
        <View className="gap-sm">
          <Button
            variant="link"
            onPress={() => form.setValue("category", undefined)}
            title="Odaberi drugu kategoriju"
          />
          <Button onPress={() => check()} title="Nastavi" />
        </View>
      </View>
    )
  }

  return (
    <View className="flex-1 justify-between gap-lg p-screen">
      <View className="gap-sm">
        <FormInput<CreateItemForm> name="searchCategoryQuery" label="Pretraži kategorije" placeholder="Pretraži" />
        <Button onPress={openList} variant="secondary" title="Učitaj iz liste" />
      </View>
      <View>
        <Button onPress={() => check()} title="Nastavi" />
      </View>
    </View>
  )
}
