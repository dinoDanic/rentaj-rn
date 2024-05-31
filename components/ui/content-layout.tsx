import { FC, PropsWithChildren, ReactNode } from "react"
import { View } from "react-native"

import { cn } from "@/lib/utils"

import { H2, H4 } from "./typography"

type ContentLayouVariant = "default" | "leading"

type Props = PropsWithChildren & {
  title: string
  childrenClassName?: string
  className?: string
  action?: ReactNode
  variant?: ContentLayouVariant
}

export const ContentLayout: FC<Props> = ({ variant = "default", ...props }) => {
  if (variant === "default") {
    return (
      <View className={cn("gap-md", props.className)}>
        <View className="flex-row justify-between px-screen">
          <H4>{props.title}</H4>
          {props.action && props.action}
        </View>
        <View className={props.childrenClassName}>{props.children}</View>
      </View>
    )
  }

  if (variant === "leading") {
    return (
      <View className={cn("gap-0", props.className)}>
        <View className="flex-row justify-between px-screen">
          <H2 className="top-0">{props.title}</H2>
          {props.action && props.action}
        </View>
        <View className={props.childrenClassName}>{props.children}</View>
      </View>
    )
  }
  return null
}
