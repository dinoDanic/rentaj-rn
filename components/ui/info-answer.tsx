import { View } from "react-native"

import { Text } from "./text"

type Props = {
  info: string
  answer: string
}

export const InfoAnswer = (props: Props) => {
  return (
    <View className="flex-row justify-between">
      <Text>{props.info}</Text>
      <Text className="font-bold">{props.answer}</Text>
    </View>
  )
}
