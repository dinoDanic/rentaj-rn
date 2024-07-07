import { ItemByIdQuery } from "@/gql/generated/graphql"
import { View } from "react-native"

import { ContentLayout } from "@/components/ui/content-layout"
import { InfoAnswer } from "@/components/ui/info-answer"

type Props = ItemByIdQuery

export const ItemPagePrice = ({ itemById }: Props) => {
  if (!itemById) return null
  return (
    <ContentLayout title="Cijena">
      <View className="gap-sm">
        {itemById.pricePerDay && <InfoAnswer info="Cijena po danu" answer={`${itemById.pricePerDay} €`} />}
        <InfoAnswer info="Kapara" answer={`${itemById?.capara || "0.00"} €`} />
      </View>
    </ContentLayout>
  )
}
