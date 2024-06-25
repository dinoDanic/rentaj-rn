import { ItemByIdQuery } from "@/gql/generated/graphql"
import { View } from "react-native"

import { ContentLayout } from "@/components/ui/content-layout"
import { InfoAnswer } from "@/components/ui/info-answer"

type Props = ItemByIdQuery

export const ItemPageInfo = ({ itemById }: Props) => {
  return (
    <ContentLayout title="Cijena">
      <View className="gap-sm">
        {itemById?.pricePerDay && <InfoAnswer info="Cijena po danu" answer={`${itemById?.pricePerDay} Eur`} />}
        {itemById?.capara && <InfoAnswer info="Akontacija" answer={`${itemById?.capara} Eur`} />}
        {itemById?.insertedAt && <InfoAnswer info="Objavljeno" answer={`${itemById?.insertedAt}`} />}
      </View>
    </ContentLayout>
  )
}
