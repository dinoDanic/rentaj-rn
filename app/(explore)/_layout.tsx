import { RenderSearchHeader } from "@/features/search/search-header/render-search-header"
import { Tabs } from "expo-router"
import { HeartIcon, HomeIcon, MessageCircleIcon, SearchIcon, UserIcon } from "lucide-react-native"

import { SafeAreaView } from "@/components/ui/safe-area-view"

export default function AppLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          // tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Početna",
            tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Pretraži",
            // headerShown: true,
            // header: () => <RenderSearchHeader />,
            tabBarIcon: ({ color }) => <SearchIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favoriti",
            tabBarIcon: ({ color }) => <HeartIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="messages"
          options={{
            title: "Poruke",
            tabBarIcon: ({ color }) => <MessageCircleIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profil",
            tabBarIcon: ({ color }) => <UserIcon color={color} />,
          }}
        />
      </Tabs>
    </>
  )
}
