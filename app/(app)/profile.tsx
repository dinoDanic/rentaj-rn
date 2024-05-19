import SecureView from "@/features/auth/components/secure_view"
import { useSession } from "@/features/auth/ctx"
import { Button, Text, View } from "react-native"

export default function Profile() {
  const { signOut } = useSession()
  return (
    <SecureView>
      <View>
        <Text>Profile</Text>
        <Button title="Logout" onPress={signOut} />
      </View>
    </SecureView>
  )
}
