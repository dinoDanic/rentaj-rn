import * as SplashScreen from "expo-splash-screen"

import "react-native-gesture-handler"
import "react-native-reanimated"
import "../styles/global.css"

import { Providers } from "@/project/providers"
import { Stack } from "expo-router"

import { routes } from "@/lib/routes"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  return (
    <Providers>
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name={routes.explore} options={{ headerShown: false, animation: "fade" }} />
        <Stack.Screen name={routes.rent} options={{ headerShown: false, animation: "fade" }} />
        <Stack.Screen
          name={routes.loginModal}
          options={{ headerShown: false, presentation: "modal", animation: "flip" }}
        />
        <Stack.Screen name={routes.loginWithEmail} options={{ headerShown: true }} />
      </Stack>
    </Providers>
  )
}
