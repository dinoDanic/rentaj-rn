import React from "react"
import { Stack } from "expo-router"

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Profil",
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerBlurEffect: "regular",
          headerTransparent: true,
        }}
      />
    </Stack>
  )
}
