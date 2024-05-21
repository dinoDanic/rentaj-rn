import { FC, PropsWithChildren } from "react"
import clsx from "clsx"
import { View } from "react-native"

type BaseCardProps = {
  className?: string
} & PropsWithChildren

export const BaseCard: FC<BaseCardProps> = ({ children, className }) => {
  return <View className={clsx("rounded-md border border-border p-3 shadow-lg", className)}>{children}</View>
}
