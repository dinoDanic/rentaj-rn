import { PropsWithChildren } from "react"
import { useMe } from "@/gql/hooks/user"
import { router } from "expo-router"
import { ActivityIndicator, View } from "react-native"

import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text"

type Props = PropsWithChildren

export default function SecureView(props: Props) {
  const { isLoading, data } = useMe({}, { retry: 0 })
  const { account } = data?.me || {}
  // const { session } = useSession()
  //
  if (isLoading)
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator />
      </View>
    )

  if (!account?.id) return <RenderContent />

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
