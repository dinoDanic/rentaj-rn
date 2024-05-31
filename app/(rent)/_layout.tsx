import { ListingsHeader } from "@/features/listings/components/listings-header/listings-header"
import { Tabs } from "expo-router"
import { BoxIcon, CalendarFoldIcon, CircleCheckIcon, MessageCircleIcon, UserIcon } from "lucide-react-native"

// import { SafeAreaView } from "@/components/ui/safe-area-view"

export default function ExploreLayout() {
  return (
    <>
      {/* <SafeAreaView /> */}
      <Tabs
        screenOptions={{
          // headerShown: false,
          // tabBarShowLabel: false,
          headerShadowVisible: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Danas",
            tabBarIcon: ({ color }) => <CircleCheckIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            title: "Kalendar",
            tabBarIcon: ({ color }) => <CalendarFoldIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="listings/index"
          options={{
            title: "Oglasi",
            headerTitle: "",
            tabBarIcon: ({ color }) => <BoxIcon color={color} />,
            headerRight: () => <ListingsHeader />,
            headerShadowVisible: true,
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
