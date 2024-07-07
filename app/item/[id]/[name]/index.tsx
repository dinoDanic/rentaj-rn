import { DeleteItemAction } from "@/features/item/components/page-by-id/delete-item-action"
import { ItemCheckAvaliability } from "@/features/item/components/page-by-id/item-check-avaliability"
import { ItemPageContact } from "@/features/item/components/page-by-id/item-page-contact"
import { ItemPageGallery } from "@/features/item/components/page-by-id/item-page-gallery"
import { ItemPageDelivery } from "@/features/item/components/page-by-id/item-page-info/item-page-delivery"
import { ItemPageDescription } from "@/features/item/components/page-by-id/item-page-info/item-page-description"
import { ItemPageInfo } from "@/features/item/components/page-by-id/item-page-info/item-page-info"
import { ItemPageLocation } from "@/features/item/components/page-by-id/item-page-info/item-page-location"
import { ItemUserProfile } from "@/features/item/components/page-by-id/item-page-info/item-user-profile"
import { useItemByIdQuery } from "@/gql/hooks/items"
import { router, useLocalSearchParams } from "expo-router"

import { routes } from "@/lib/routes"
import { BasePageBuilder, BasePageBuilderContent } from "@/components/ui/page/base/base-page-builder"

export type ItemSearchPageParams = {
  id: string
  name: string
}

export default function ItemPage() {
  const params = useLocalSearchParams<ItemSearchPageParams>()

  if (!params.id) throw Error("no item id")

  const { data, isLoading } = useItemByIdQuery({ input: { itemId: params.id } })

  const content: BasePageBuilderContent[] = [
    {
      id: 0,
      Component: () => <ItemPageGallery />,
      seperator: false,
      editable: {
        title: "Uredi Fotografije",
        onPress: () => router.push({ pathname: routes.item.editPhotos, params: { id: params.id, name: "Kitoslav" } }),
      },
    },
    {
      id: 1,
      Component: () => <ItemPageDescription {...data} />,
      editable: {
        title: "Uredi opis",
        onPress: () =>
          router.push({ pathname: routes.item.editDescription, params: { id: params.id, name: "Kitoslav" } }),
      },
    },
    { id: 2, Component: () => <ItemPageInfo {...data} />, editable: { title: "Uredi Informacije", onPress: () => {} } },
    { id: 3, Component: () => <ItemPageContact {...data} /> },
    {
      id: 4,
      Component: () => <ItemPageDelivery {...data} />,
      editable: { title: "Uredi opcije dostave", onPress: () => {} },
    },
    {
      id: 5,
      Component: () => <ItemPageLocation {...data} />,
      editable: { title: "Uredi lokaciju", onPress: () => {} },
    },
    {
      id: 6,
      Component: () => <ItemCheckAvaliability {...data} />,
      editable: { title: "Uredi dostupnost", onPress: () => {} },
    },
    { id: 7, Component: () => <ItemUserProfile {...data} /> },
    { id: 8, Component: () => <DeleteItemAction id={params.id!} />, showComponentInEdit: true, seperator: false },
  ]

  return <BasePageBuilder isLoading={isLoading} content={content} />
}
