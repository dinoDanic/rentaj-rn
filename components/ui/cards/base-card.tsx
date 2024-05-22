import { FC, PropsWithChildren } from "react"
import { View } from "react-native"

import { cn } from "@/lib/utils"

type BaseCardProps = {
  className?: string
} & PropsWithChildren

export const BaseCard: FC<BaseCardProps> = ({ children, className }) => {
  return <View className={cn("overflow-hidden rounded-md border border-border p-3", className)}>{children}</View>
}
