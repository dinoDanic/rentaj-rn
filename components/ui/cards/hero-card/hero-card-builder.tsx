import { useState } from "react"
import { Dimensions, FlatList, ListRenderItem, View } from "react-native"

import { cn } from "@/lib/utils"

type Props<D> = {
  data: D[]
  renderItem: ListRenderItem<D> | null | undefined
}

export const HeroCardBuilder = <D,>(props: Props<D>) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const { width: viewportWidth } = Dimensions.get("window")
  return (
    <View className="gap-xs">
      <FlatList
        data={props.data}
        pagingEnabled
        snapToAlignment="center"
        onScroll={(a) => {
          const index = Math.round(a.nativeEvent.contentOffset.x / viewportWidth)
          setActiveIndex(index)
        }}
        decelerationRate="fast"
        horizontal
        renderItem={props.renderItem}
        showsHorizontalScrollIndicator={false}
      />
      <View className="flex-row items-center justify-center gap-xs">
        {props.data.map((_, index) => {
          const isActive = index === activeIndex
          return (
            <View
              key={index}
              className={cn("h-2 w-2 rounded-xl bg-muted transition-all", isActive && "bg-muted-foreground")}
            />
          )
        })}
      </View>
    </View>
  )
}
