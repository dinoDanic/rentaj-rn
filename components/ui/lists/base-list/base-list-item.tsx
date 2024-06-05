import { Link } from "expo-router"
import { TouchableOpacity, View } from "react-native"

import { ICONS } from "@/lib/icons/icon-with-classname"
import { cn } from "@/lib/utils"

import { Text } from "../../text"

type Props = {
  name: string
  href?: string
  onPress: () => void
}

export const BaseListItem = (props: Props) => {
  const content = (
    <View className={cn("w-full border-b border-border py-md")}>
      <View className={cn("w-full flex-row items-center justify-between px-screen")}>
        <Text className="flex-1">{props.name}</Text>
        {props.href && ICONS({}).chevronRight}
      </View>
    </View>
  )
  if (props.href) {
    return <Link href={props.href}>{content}</Link>
  }

  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}
