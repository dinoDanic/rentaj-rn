import { ReactNode } from "react"
import { router } from "expo-router"
import { View } from "react-native"

import { iconSizes } from "@/lib/icon-sizes"
import { ChevronLeft } from "@/lib/icons/icon-with-classname"
import { cn } from "@/lib/utils"

import { Button } from "./button"
import { H4 } from "./typography"

type HeaderProps = {
  actions?: ReactNode[]
  title?: string
  hideBackButton?: boolean
  className?: string
}

export const Header = (props: HeaderProps) => {
  return (
    <View className={cn("flex-row items-center px-screen", props.className)}>
      <View className="flex-1">
        {props.hideBackButton !== true && (
          <Button
            variant="secondary"
            size="icon"
            icon={<ChevronLeft size={iconSizes.md} className="text-foreground" />}
            onPress={() => router.back()}
          />
        )}
      </View>
      <View className="flex-1">
        <H4 className="text-center">{props.title}</H4>
      </View>
      <View className="flex-1 flex-row justify-end gap-sm">{props?.actions}</View>
    </View>
  )
}
