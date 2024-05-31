import { router } from "expo-router"
import { View } from "react-native"

import { iconSizes } from "@/lib/icon-sizes"
import { PlusIcon } from "@/lib/icons/icon-with-classname"
import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"

import { ListingsFilter } from "./listings-filter"

export const ListingsHeader = () => {
  return (
    <View className="flex-row gap-sm pr-screen">
      <ListingsFilter />
      <Button
        onPress={() => router.push(routes.createListingsModal)}
        variant="secondary"
        size="icon"
        icon={<PlusIcon size={iconSizes.md} className="text-muted-foreground" />}
      />
    </View>
  )
}
