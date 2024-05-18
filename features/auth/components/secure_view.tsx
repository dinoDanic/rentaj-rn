import { PropsWithChildren } from "react";
import { useSession } from "../ctx";
import { View, Text, Button } from "react-native";
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
      <Button title="Login to view" />
      <SmileIcon color={"blue"} />
    </View>
  );
};
