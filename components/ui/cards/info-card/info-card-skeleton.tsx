import { View } from "react-native"

import { cn } from "@/lib/utils"

import { Skeleton } from "../../skeleton"
import { infoCardConst } from "./info-card"

export const InfoCardSkeleton = () => {
  const { height, width } = infoCardConst
  return (
    <View>
      <Skeleton className={cn(height.image, width.total, "rounded-none rounded-t-lg")} />
      <Skeleton className={cn(height.content, width.total, "rounded-none rounded-b-lg dark:bg-muted/50")} />
    </View>
  )
}
