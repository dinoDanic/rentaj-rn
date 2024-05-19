import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import "../styles/global.css";

import { SafeAreaView } from "react-native-safe-area-context";
import { Providers } from "@/project/providers";
import { AppTabs } from "./(components)/app-tabs";
import { useColorScheme } from "@/lib/useColorScheme";
import { NAV_THEME } from "@/lib/constants";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { isDarkColorScheme } = useColorScheme();
  return (
    <Providers>
      <SafeAreaView
        style={{
          backgroundColor: isDarkColorScheme
            ? NAV_THEME.dark.background
            : NAV_THEME.light.background,
        }}
      />
      <AppTabs />
    </Providers>
  );
}
