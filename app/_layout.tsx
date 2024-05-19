import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import "../styles/global.css";

import { Providers } from "@/project/providers";
import { AppTabs } from "./(components)/app-tabs";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Providers>
      <AppTabs />
    </Providers>
  );
}
