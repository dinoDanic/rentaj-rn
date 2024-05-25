import { FC, PropsWithChildren } from "react"
import { View } from "react-native"

import { cn } from "@/lib/utils"

type BaseCardProps = {
  className?: string
} & PropsWithChildren

export const BaseCard: FC<BaseCardProps> = ({ children, className }) => {
  return (
    <View className={cn("overflow-hidden rounded-xl border border-border bg-card p-3", className)}>{children}</View>
  )
}
