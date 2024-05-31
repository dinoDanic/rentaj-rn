import { router } from "expo-router"
import { View } from "react-native"

import { iconSizes } from "@/lib/icon-sizes"
import { PlusIcon } from "@/lib/icons/icon-with-classname"
import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { H2 } from "@/components/ui/typography"

import { ListingsFilter } from "./listings-filter"

export const ListingsHeader = () => {
  return (
    <View className="mb-s h-[80] flex-row justify-between">
      <View className="justify-end">
        <H2>Moji oglasi</H2>
      </View>
      <View className="flex-row gap-sm">
        <ListingsFilter />
        <Button
          onPress={() => router.push(routes.createListingsModal)}
          variant="secondary"
          size="icon"
          icon={<PlusIcon size={iconSizes.md} className="text-muted-foreground" />}
        />
      </View>
    </View>
  )
}
