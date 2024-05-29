import { PropsWithChildren } from "react"
import { View } from "react-native"

export const WithSideIcon = (props: PropsWithChildren) => {
  return <View className="absolute left-md">{props.children}</View>
}
