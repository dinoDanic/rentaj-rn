import SecureView from "@/features/auth/components/secure_view";
import { Text, View } from "react-native";

export default function Messages() {
  return (
    <SecureView>
      <View>
        <Text>Messages</Text>
      </View>
    </SecureView>
  );
}
