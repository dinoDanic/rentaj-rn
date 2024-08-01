import { TouchableOpacity, View } from "react-native"

import { Text } from "./text"

type Props = {
  info: string
  answer: string
  onPress?: () => void
}

export const InfoAnswer = (props: Props) => {
  const content = (
    <View className="flex-row flex-wrap justify-between gap-sm">
      <Text>{props.info}</Text>
      <Text className="font-bold">{props.answer}</Text>
    </View>
  )

  if (props.onPress) {
    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
  }

  return content
}
