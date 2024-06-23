import React from "react"
import { ListingsHeader } from "@/features/listings/components/listings-header/listings-header"
import { Stack } from "expo-router"

export default function ListingsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Kalendar",
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerBlurEffect: "regular",
          headerTransparent: true,
        }}
      />
    </Stack>
  )
}
