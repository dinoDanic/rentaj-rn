import SecureView from "@/features/auth/components/secure_view"
import { Text, View } from "react-native"

export default function Favorites() {
  return (
    <SecureView>
      <View>
        <Text>Favorites</Text>
      </View>
    </SecureView>
  )
}
