import { Actions } from "@/features/auth/components/login-modal/actions"
import { Footer } from "@/features/auth/components/login-modal/footer"
import { HeaderImage } from "@/features/auth/components/login-modal/header-image"
import { HeaderText } from "@/features/auth/components/login-modal/header-text"
import { SafeAreaView, View } from "react-native"

export default function LoginModal() {
  return (
    <>
      <View className="flex-1">
        <HeaderImage />
        <View className="flex-1 items-center gap-2xl px-screen pt-xl">
          <HeaderText />
          <View className="w-full flex-1 justify-between">
            <Actions />
            <Footer />
          </View>
        </View>
      </View>
      <SafeAreaView />
    </>
  )
}
