import { View } from "react-native"

import { cn } from "@/lib/utils"

type Props = {
  className?: string
}

export const Divider = (props: Props) => {
  return <View className={cn("border border-dotted border-muted", props.className)} />
}
