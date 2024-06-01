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
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.explore} options={{ animation: "fade" }} />
        <Stack.Screen name={routes.rent} options={{ animation: "fade", title: "Iznajmljivanje" }} />
        <Stack.Screen name={routes.loginModal} options={{ presentation: "modal", animation: "default" }} />
        <Stack.Screen name={routes.loginWithEmail} />
        <Stack.Screen
          name={routes.filterListingsModal}
          options={{ presentation: "formSheet", headerTransparent: true }}
        />
      </Stack>
    </Providers>
  )
}
