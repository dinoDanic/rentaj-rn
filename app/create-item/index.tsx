import { CreateItemForm } from "@/features/listings/types"
import { Link } from "expo-router"
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
      console.log("valid")
    } else {
      Alert.alert("Kategorija je obavezna")
    }
  }
  return (
    <View className="flex-1 justify-between gap-lg p-screen">
      <View>
        <Text className="text-center">Pretrazi</Text>
        <Text className="text-center">Oznacno: {category?.name ?? "Prazno"}</Text>
        <Link href={`${routes.createItem}/0`}>
          <Text className="text-center">List</Text>
        </Link>
      </View>
      <View>
        <Button onPress={() => check()} title="Nastavi" />
      </View>
    </View>
  )
}
