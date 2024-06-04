import { FlashList, ListRenderItem } from "@shopify/flash-list"
import { View } from "react-native"

type InfoCardBuilderProps<D> = {
  data: D[] | null | undefined
  renderItem: ListRenderItem<D> | null | undefined
}

export const BootyBayCardBuilder = <D,>(props: InfoCardBuilderProps<D>) => {
  return (
    <FlashList
      ItemSeparatorComponent={() => <View className="h-4" />}
      data={props.data}
      renderItem={props.renderItem}
      estimatedItemSize={100}
    />
  )
}
