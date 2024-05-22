import { FC, PropsWithChildren } from "react"
import { View } from "react-native"

import { H4 } from "./typography"

type Props = PropsWithChildren & {
  title: string
  childrenClassName?: string
}

export const ContentLayout: FC<Props> = (props) => {
  return (
    <View className="gap-2">
      <H4>{props.title}</H4>
      <View className={props.childrenClassName}>{props.children}</View>
    </View>
  )
}
