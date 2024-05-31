import { useRentaj } from "@/features/rentaj/hooks/use-rentaj"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { router } from "expo-router"

import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"

import { useMe } from "../hooks/use-me"

export const LogoutAction = () => {
  const { setMe } = useMe()
  const { view, toggleView } = useRentaj()

  const logout = async () => {
    await AsyncStorage.clear()
    if (view === "rent") {
      toggleView()
      router.replace(routes.explore)
    }
    setMe(null)
  }

  return <Button variant="link" title="logout" onPress={() => logout()} />
}
