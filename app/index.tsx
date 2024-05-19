import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function Index() {
  return (
    <View>
      <Button>
        <Text>hello</Text>
      </Button>
      <View className="w-20 h-20 bg-primary"></View>
    </View>
  );
}
