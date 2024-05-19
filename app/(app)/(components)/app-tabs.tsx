import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/lib/useColorScheme";
import { NAV_THEME } from "@/styles/nav_theme";
import { Tabs } from "expo-router";
import {
  HeartIcon,
  HomeIcon,
  MessageCircleIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const AppTabs = () => {
  const { isDarkColorScheme } = useColorScheme();
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: isDarkColorScheme
            ? NAV_THEME.dark.background
            : NAV_THEME.light.background,
        }}
      />
      <Tabs
        screenOptions={{
          headerShown: false,
          headerBackground: () => <Text>lol</Text>,
          tabBarShowLabel: false,
          headerShadowVisible: false,
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
    </>
  );
};
