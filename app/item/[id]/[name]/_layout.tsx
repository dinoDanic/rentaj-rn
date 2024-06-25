import React from "react"
import { router, Stack, useLocalSearchParams } from "expo-router"

import { ICONS } from "@/lib/icons/icon-with-classname"
import { Button } from "@/components/ui/button"

import { ItemSearchPageParams } from "."

export default function ItemByIdPLayout() {
  const params = useLocalSearchParams<ItemSearchPageParams>()
  const headerLeft = <Button onPress={router.back} variant="secondary" size="icon" icon={ICONS({}).xIcon} />

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: params.name,
          // headerBackVisible: true,
          headerLargeTitle: true,
          headerLeft: () => headerLeft,
          headerBackTitleVisible: true,
          headerShadowVisible: false,
          headerBlurEffect: "regular",
          headerTransparent: true,
        }}
      />
    </Stack>
  )
}
