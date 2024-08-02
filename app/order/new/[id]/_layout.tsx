import React from "react"
import { Stack } from "expo-router"

export default function ItemByIdPLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ presentation: "modal", headerLargeTitle: true, title: "Rentaj", headerShadowVisible: false }}
      />
    </Stack>
  )
}
