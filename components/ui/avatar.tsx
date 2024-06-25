import { View } from "react-native"

import { Muted } from "./typography"

export type AvatarProps = {
  fallback: string
  image?: string
}

export const Avatar = (props: AvatarProps) => {
  return (
    <View className="h-14 w-14 items-center justify-center rounded-full bg-muted">
      <Muted>{props.fallback.slice(0, 2).toUpperCase()}</Muted>
    </View>
  )
}
