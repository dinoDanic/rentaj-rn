import { useRentaj } from "@/features/rentaj/hooks/use-rentaj"
import { RentajView } from "@/features/rentaj/types"
import { router } from "expo-router"

import { routes, RouteValues } from "@/lib/routes"
import { Button } from "@/components/ui/button"

export const ViewSwithcer = () => {
  const { view, setView } = useRentaj()

  const switchView = () => {
    const newView: RentajView = view === "explore" ? "rent" : "explore"
    const newRoute: RouteValues = view === "explore" ? routes.rent : routes.explore
    setView(newView)
    router.replace(newRoute)
  }
  return <Button onPress={switchView} title="Swithc to renters" />
}
