import { Tabs } from "expo-router"
import { BoxIcon, CalendarFoldIcon, CircleCheckIcon, MessageCircleIcon, UserIcon } from "lucide-react-native"

export default function ExploreLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          headerShadowVisible: true,
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
          name="listings"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <BoxIcon color={color} />,
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
