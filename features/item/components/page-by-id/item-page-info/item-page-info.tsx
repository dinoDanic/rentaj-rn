import { ItemByIdQuery } from "@/gql/generated/graphql"
import { format } from "date-fns"
import { hr } from "date-fns/locale"
import { View } from "react-native"

import { ContentLayout } from "@/components/ui/content-layout"
import { InfoAnswer } from "@/components/ui/info-answer"
import { Text } from "@/components/ui/text"

type Props = ItemByIdQuery

export const ItemPageInfo = ({ itemById }: Props) => {
  if (!itemById) return null
  if (!itemById.insertedAt) return <Text>No inserted at</Text>

  const insertedAt = format(new Date(itemById.insertedAt), "PPPP", { locale: hr })

  return (
    <ContentLayout title="Informacije">
      <View className="gap-sm">
        <InfoAnswer info="Kategorija" answer={itemById.category.name} />
        <InfoAnswer info="Objavljeno" answer={insertedAt} />
        <InfoAnswer info="ID Oglasa" answer={itemById.id} />
      </View>
    </ContentLayout>
  )
}
