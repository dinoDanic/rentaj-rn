import { FlashList, ListRenderItem } from "@shopify/flash-list"
import { MotiView } from "moti"
import { View } from "react-native"

type InfoCardBuilderProps<D> = {
  data: D[] | null | undefined
  renderItem: ListRenderItem<D> | null | undefined
}

export const BootyBayCardBuilder = <D,>(props: InfoCardBuilderProps<D>) => {
  return (
    <MotiView from={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring" }}>
      <FlashList
        ItemSeparatorComponent={() => <View className="h-4" />}
        data={props.data}
        renderItem={props.renderItem}
        estimatedItemSize={100}
      />
    </MotiView>
  )
}
