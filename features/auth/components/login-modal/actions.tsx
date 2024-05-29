import { router } from "expo-router"
import { View } from "react-native"

import { KeyIcon, MailIcon } from "@/lib/icons/icon-with-classname"
import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"

export const Actions = () => {
  return (
    <View className=" gap-sm">
      <Button
        sideIcon={<KeyIcon size={20} className="text-foreground" />}
        variant="secondary"
        title="Prijava s Google"
        className="w-full"
      />
      <Button
        sideIcon={<MailIcon size={20} className="text-foreground" />}
        variant="secondary"
        title="Priava s Mailom"
        className="w-full"
        onPress={() => router.push(routes.loginWithEmail)}
      />
    </View>
  )
}
