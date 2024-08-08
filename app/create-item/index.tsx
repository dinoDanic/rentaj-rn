import { CreateItemForm } from "@/features/listings/types"
import { router } from "expo-router"
import { useFormContext } from "react-hook-form"
import { Alert, View } from "react-native"

import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text"

export default function CreateItemChooseCategoryPage() {
  const form = useFormContext<CreateItemForm>()

  const category = form.watch("category")

  const check = async () => {
    const isValid = await form.trigger(["category"])

    if (isValid) {
      router.push(routes.createItem.info)
    } else {
      Alert.alert("Kategorija je obavezna")
    }
  }

  const openList = () => router.push({ pathname: routes.createItem.category, params: { "category-id": "0" } })

  const changeCategory = () => {
    form.setValue("category", undefined)
    openList()
  }

  if (category) {
    return (
      <View className="flex-1 justify-between px-screen">
        <View className="flex-1 items-center justify-center">
          <Text>Odabrana kategorija</Text>
          <Text className="font-bold">{category.name}</Text>
        </View>
        <View className="gap-sm">
          <Button variant="link" onPress={changeCategory} title="Odaberi drugu kategoriju" />
          <Button onPress={() => check()} title="Nastavi" />
        </View>
      </View>
    )
  }

  return (
    <View className="flex-1 justify-between gap-lg p-screen">
      <View className="items-centeru flex-1 justify-center gap-sm">
        {/* <FormInput<CreateItemForm> name="searchCategoryQuery" label="Pretraži kategorije" placeholder="Pretraži" /> */}
        {/* <SearchCategories /> */}
        <Button onPress={openList} variant="secondary" title="Odaberi kategoriju iz liste" />
      </View>
      <View>
        <Button onPress={() => check()} title="Nastavi" />
      </View>
    </View>
  )
}
