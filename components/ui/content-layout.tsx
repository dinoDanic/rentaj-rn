import { FC, PropsWithChildren } from "react"
import { View } from "react-native"

import { H2 } from "./typography"

type Props = PropsWithChildren & {
  title: string
}

export const ContentLayout: FC<Props> = ({ children, title }) => {
  return (
    <View className="gap-2">
      <H2>{title}</H2>
      <View>{children}</View>
    </View>
  )
}
