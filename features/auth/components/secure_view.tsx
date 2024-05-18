import { PropsWithChildren } from "react";
import { useSession } from "../ctx";
import { View, Text } from "react-native";
import { SmileIcon } from "lucide-react-native";

type Props = PropsWithChildren;

export default function SecureView(props: Props) {
  const { session } = useSession();
  if (!session) return <RenderContent />;
  return props.children;
}

const RenderContent = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
      }}
    >
      <Text>Login to view</Text>
      <SmileIcon />
    </View>
  );
};
