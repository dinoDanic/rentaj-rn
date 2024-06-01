import * as SplashScreen from "expo-splash-screen"

import { XIcon } from "@/lib/icons/icon-with-classname"

import "react-native-gesture-handler"
import "react-native-reanimated"
import "../styles/global.css"

import { Providers } from "@/project/providers"
import { router, Stack } from "expo-router"

import { iconSizes } from "@/lib/icon-sizes"
import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  return (
    <Providers>
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name={routes.explore} options={{ headerShown: false, animation: "fade" }} />
        <Stack.Screen name={routes.rent} options={{ headerShown: false, animation: "fade" }} />
        <Stack.Screen
          name={routes.loginModal}
          options={{ headerShown: false, presentation: "modal", animation: "default" }}
        />
        <Stack.Screen name={routes.loginWithEmail} options={{ headerShown: true }} />
        <Stack.Screen
          name={routes.createListingsModal}
          options={{
            presentation: "fullScreenModal",
            title: "Kreiraj oglas",
            headerRight: () => (
              <Button
                size="icon"
                icon={<XIcon className="text-primary" size={iconSizes.md} />}
                variant="secondary"
                onPress={() => router.back()}
              />
            ),
          }}
        />
        <Stack.Screen
          name={routes.filterListingsModal}
          options={{ presentation: "formSheet", headerTransparent: true }}
        />
      </Stack>
    </Providers>
  )
}
