import { FC, PropsWithChildren } from "react"
import { View } from "react-native"

import { H4 } from "./typography"

type Props = PropsWithChildren & {
  title: string
}

export const ContentLayout: FC<Props> = ({ children, title }) => {
  return (
    <View className="gap-2">
      <H4>{title}</H4>
      <View>{children}</View>
    </View>
  )
}
