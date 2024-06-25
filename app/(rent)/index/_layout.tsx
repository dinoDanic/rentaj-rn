import React from "react"
import { Stack } from "expo-router"

export default function TodayLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="today"
        options={{
          title: "Danas",
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerBlurEffect: "regular",
          headerTransparent: true,
          headerSearchBarOptions: {
            placeholder: "kita",
          },
        }}
      />
    </Stack>
  )
}
