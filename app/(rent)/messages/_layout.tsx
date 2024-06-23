import React from "react"
import { Stack } from "expo-router"

export default function MessagesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Poruke",
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerBlurEffect: "regular",
          headerTransparent: true,
        }}
      />
    </Stack>
  )
}
