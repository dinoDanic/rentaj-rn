import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../styles/globals.css";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SessionProvider } from "@/features/auth/ctx";
import {
  HeartIcon,
  HomeIcon,
  MessageCircleIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SessionProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <SafeAreaView />
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            headerShadowVisible: false,
            // tabBarActiveTintColor: Colors.primary,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              tabBarIcon: ({ color }) => <HomeIcon color={color} />,
            }}
          />
          <Tabs.Screen
            name="search"
            options={{
              tabBarIcon: ({ color }) => <SearchIcon color={color} />,
            }}
          />
          <Tabs.Screen
            name="favorites"
            options={{
              tabBarIcon: ({ color }) => <HeartIcon color={color} />,
            }}
          />
          <Tabs.Screen
            name="messages"
            options={{
              tabBarIcon: ({ color }) => <MessageCircleIcon color={color} />,
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              tabBarIcon: ({ color }) => <UserIcon color={color} />,
            }}
          />
        </Tabs>
      </ThemeProvider>
    </SessionProvider>
  );
}
