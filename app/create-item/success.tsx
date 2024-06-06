import { router } from "expo-router"
import { View } from "react-native"

import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text"

export default function CreateItemSuccess() {
  return (
    <View className="flex-1 items-center justify-center gap-lg">
      <Text>Uspjesno kreirano</Text>
      <Button title="Moji oglasi" onPress={() => router.replace(routes.myItems)} />
    </View>
  )
}
