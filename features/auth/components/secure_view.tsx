import { PropsWithChildren } from "react";
import { useSession } from "../ctx";
import { router } from "expo-router";
import { routes } from "@/lib/routes";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

type Props = PropsWithChildren;

export default function SecureView(props: Props) {
  const { session } = useSession();
  if (!session) return <RenderContent />;
  return props.children;
}

const RenderContent = () => {
  return (
    <View className="flex-1 items-center justify-center gap-2">
      <Button
        variant="secondary"
        onPress={() => {
          router.push(routes.login);
        }}
      >
        <Text>Login</Text>
      </Button>
      <Text>or</Text>
      <Button
        variant="secondary"
        onPress={() => {
          router.push(routes.login);
        }}
      >
        <Text>Register</Text>
      </Button>
    </View>
  );
};
