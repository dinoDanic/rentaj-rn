import { LogoutAction } from "@/features/auth/components/logout-action"
import SecureView from "@/features/auth/components/secure_view"
import { View } from "react-native"

import { ViewSwithcer } from "../components/view-switcher"

export const ProfilePage = () => {
  return (
    <View className="flex-1 p-screen">
      <SecureView>
        <ViewSwithcer />
        <LogoutAction />
      </SecureView>
    </View>
  )
}
