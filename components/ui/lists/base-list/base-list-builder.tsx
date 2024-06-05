import { FlashList, ListRenderItem } from "@shopify/flash-list"

type Props<D> = {
  data: D[]
  renderItem: ListRenderItem<D> | null | undefined
}

export const BaseListBuilder = <D,>(props: Props<D>) => {
  return <FlashList estimatedItemSize={100} data={props.data} renderItem={props.renderItem} />
}
