import { ItemCheckAvaliability } from "@/features/item/components/page-by-id/item-check-avaliability"
import { ItemPageContact } from "@/features/item/components/page-by-id/item-page-contact"
import { ItemPageGallery } from "@/features/item/components/page-by-id/item-page-gallery"
import { ItemPageDelivery } from "@/features/item/components/page-by-id/item-page-info/item-page-delivery"
import { ItemPageInfo } from "@/features/item/components/page-by-id/item-page-info/item-page-info"
import { ItemPageLocation } from "@/features/item/components/page-by-id/item-page-info/item-page-location"
import { ItemUserProfile } from "@/features/item/components/page-by-id/item-page-info/item-user-profile"
import { useItemByIdQuery } from "@/gql/hooks/items"
import { useLocalSearchParams } from "expo-router"
import { ActivityIndicator, ScrollView, View } from "react-native"

import { Separator } from "@/components/ui/separator"
import { Muted } from "@/components/ui/typography"
import { FadeIn } from "@/components/animations/fade-in"

export type ItemSearchPageParams = {
  id: string
  name: string
}

export default function ItemPage() {
  const params = useLocalSearchParams<ItemSearchPageParams>()

  if (!params.id) throw Error("no item id")

  const { data, isLoading } = useItemByIdQuery({ input: { itemId: params.id } })

  const loadedContent = (
    <FadeIn>
      <View className="gap-xl px-screen">
        <ItemPageGallery />
        <Muted>{data?.itemById?.description}</Muted>
        <ItemPageInfo {...data} />
        <ItemPageContact {...data} />
        <Separator />
        <ItemPageDelivery {...data} />
        <Separator />
        <ItemPageLocation {...data} />
        <Separator />
        <ItemCheckAvaliability {...data} />
        <Separator />
        <ItemUserProfile {...data} />
      </View>
    </FadeIn>
  )

  const loading = (
    <View className="h-[200] items-center justify-center">
      <ActivityIndicator />
    </View>
  )

  const content = isLoading ? loading : loadedContent

  return <ScrollView contentInsetAdjustmentBehavior="automatic">{content}</ScrollView>
}
