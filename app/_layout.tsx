import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import "../styles/global.css";

import { Providers } from "@/project/providers";
import { Stack } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Providers>
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="login-modal" options={{ presentation: "modal" }} />
      </Stack>
    </Providers>
  );
}
