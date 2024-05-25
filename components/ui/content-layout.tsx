import { FC, PropsWithChildren, ReactNode } from "react"
import { View } from "react-native"

import { H4 } from "./typography"

type Props = PropsWithChildren & {
  title: string
  childrenClassName?: string
  action?: ReactNode
}

export const ContentLayout: FC<Props> = (props) => {
  return (
    <View className="gap-lg">
      <View className="flex-row justify-between px-screen">
        <H4>{props.title}</H4>
        {props.action && props.action}
      </View>
      <View className={props.childrenClassName}>{props.children}</View>
    </View>
  )
}
