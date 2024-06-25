import { Link } from "expo-router"
import { View } from "react-native"

import { ICONS } from "@/lib/icons/icon-with-classname"

import { Avatar, AvatarProps } from "../avatar"
import { Text } from "../text"
import { Muted } from "../typography"

type Props = AvatarProps & {
  title: string
  subtitle: string
  href: string
}

export const AvatarCard = ({ title, subtitle, href, ...avatarProps }: Props) => {
  return (
    <Link href={href}>
      <View className="w-full flex-row items-center justify-between">
        <View className="flex-row items-center gap-md">
          <Avatar {...avatarProps} />
          <View>
            <Text className="font-bold">{title}</Text>
            <Muted>{subtitle}</Muted>
          </View>
        </View>
        {ICONS({}).chevronRight}
      </View>
    </Link>
  )
}
