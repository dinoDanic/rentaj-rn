import { Tabs } from "expo-router"
import { HeartIcon, HomeIcon, MessageCircleIcon, SearchIcon, UserIcon } from "lucide-react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Text } from "@/components/ui/text"

export default function AppLayout() {
  return (
    <>
      <SafeAreaView />
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
  )
}
