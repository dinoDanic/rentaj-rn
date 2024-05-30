import { PropsWithChildren } from "react"
import { router } from "expo-router"
import { View } from "react-native"

import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text"

import { useMe } from "../hooks/use-me"

type Props = PropsWithChildren

export default function SecureView(props: Props) {
  const { user } = useMe()

  if (!user?.id) return <RenderContent />

  return props.children
}

const RenderContent = () => {
  return (
    <View className="flex-1 items-center justify-center gap-2">
      <Button
        variant="secondary"
        onPress={() => {
          router.push(routes.loginModal)
        }}
        title="Login"
      />
      <Text>or</Text>
      <Button
        variant="secondary"
        onPress={() => {
          router.push(routes.loginModal)
        }}
        title="Register"
      />
    </View>
  )
}
