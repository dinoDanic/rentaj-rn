import { FlashList, ListRenderItem } from "@shopify/flash-list"

import { FadeIn } from "@/components/animations/fade-in"

type Props<D> = {
  data: D[]
  renderItem: ListRenderItem<D> | null | undefined
}

export const BaseListBuilder = <D,>(props: Props<D>) => {
  return (
    <FadeIn className="flex-1">
      <FlashList estimatedItemSize={100} data={props.data} renderItem={props.renderItem} />
    </FadeIn>
  )
}
