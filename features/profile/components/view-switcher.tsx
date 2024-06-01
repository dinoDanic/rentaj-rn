import { useState } from "react"
import { useRentaj } from "@/features/rentaj/hooks/use-rentaj"
import { RentajView } from "@/features/rentaj/types"
import { router, useFocusEffect } from "expo-router"
import { MotiView } from "moti"
import { View } from "react-native"

import { ArrowLeftRightIcon } from "@/lib/icons/icon-with-classname"
import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"

export const ViewSwithcer = () => {
  const { view, setView } = useRentaj()
  const [visible, setVisible] = useState(false)

  const switchView = () => {
    const newView: RentajView = view === "explore" ? "rent" : "explore"
    const newRoute = view === "explore" ? routes.rent : routes.explore
    setView(newView)
    router.replace(newRoute)
  }

  useFocusEffect(() => {
    setVisible(true)
    return () => setVisible(false)
  })

  const title = view === "explore" ? "Prebaci na iznamljivanje" : "Prebaci na istraživanje"
  const bottom: number = visible ? 0 : -100
  return (
    <View className="absolute bottom-lg w-full">
      <MotiView animate={{ bottom: bottom }} transition={{ type: "spring" }}>
        <Button
          className="self-center"
          icon={<ArrowLeftRightIcon className="text-primary-foreground" size={16} />}
          onPress={switchView}
          title={title}
        />
      </MotiView>
    </View>
  )
}
