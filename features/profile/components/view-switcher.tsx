import { useRentaj } from "@/features/rentaj/hooks/use-rentaj"
import { RentajView } from "@/features/rentaj/types"
import { router } from "expo-router"
import { MotiView } from "moti"
import { View } from "react-native"

import { ArrowLeftRightIcon } from "@/lib/icons/icon-with-classname"
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

  const title = view === "explore" ? "Prebaci na iznamljivanje" : "Prebaci na istraživanje"
  return (
    <View className="absolute bottom-sm w-full">
      <MotiView
        from={{ opacity: 0, bottom: -100 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1, bottom: 0 }}
        transition={{ type: "spring" }}
      >
        <Button
          className="self-center"
          size="sm"
          icon={<ArrowLeftRightIcon className="text-primary-foreground" size={16} />}
          onPress={switchView}
          title={title}
        />
      </MotiView>
    </View>
  )
}
