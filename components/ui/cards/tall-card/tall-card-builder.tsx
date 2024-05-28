import { FlashList, ListRenderItem } from "@shopify/flash-list"
import { MotiView } from "moti"
import { View } from "react-native"

type TallCardBuilderProps<D> = {
  data: D[] | null | undefined
  renderItem: ListRenderItem<D> | null | undefined
}

export const TallCardBuilder = <D,>(props: TallCardBuilderProps<D>) => {
  if (props.data) {
    return (
      <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring" }}>
        <FlashList
          horizontal
          data={props.data}
          className="pl-screen"
          renderItem={props.renderItem}
          ItemSeparatorComponent={() => <View className="w-sm" />}
          showsHorizontalScrollIndicator={false}
          estimatedItemSize={200}
        />
      </MotiView>
    )
  }
  return null
}
