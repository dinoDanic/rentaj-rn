import { Category } from "@/gql/generated/graphql"
import { FlashList, ListRenderItem } from "@shopify/flash-list"
import { MotiView } from "moti"
import { FlatList, View } from "react-native"

import { InfoCardSkeleton } from "./info-card-skeleton"

type InfoCardBuilderProps<D> = {
  isLoading: boolean
  data: D[] | null | undefined
  renderItem: ListRenderItem<D> | null | undefined
}

const fakeCategories: Category[] = [
  { id: "1", name: "tk tk" },
  { id: "2", name: "tk tk" },
  { id: "3", name: "tk tk" },
  { id: "4", name: "tk tk" },
]

export const InfoCardBuilder = <D,>(props: InfoCardBuilderProps<D>) => {
  if (props.isLoading) {
    return (
      <MotiView from={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring" }}>
        <FlatList
          data={fakeCategories}
          horizontal
          className=""
          renderItem={() => <InfoCardSkeleton />}
          ItemSeparatorComponent={() => <View className="w-2" />}
        />
      </MotiView>
    )
  }

  if (props.data) {
    return (
      <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring" }}>
        <FlashList
          horizontal
          data={props.data}
          className="pl-screen"
          renderItem={props.renderItem}
          ItemSeparatorComponent={() => <View className="w-2" />}
          showsHorizontalScrollIndicator={false}
          estimatedItemSize={200}
        />
      </MotiView>
    )
  }
}
