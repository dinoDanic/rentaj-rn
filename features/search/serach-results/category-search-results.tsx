import { SearchPageQuery } from "@/gql/generated/graphql"
import { getRandomImage } from "@/helpers/images"
import { UseQueryResult } from "@tanstack/react-query"
import { View } from "react-native"

import { BootyBayCard } from "@/components/ui/cards/bootybay-card/bootybay-card"
import { BootyBayCardBuilder } from "@/components/ui/cards/bootybay-card/bootybay-card-builder"
import { ContentLayout } from "@/components/ui/content-layout"

type Props = {
  query: UseQueryResult<SearchPageQuery, Error>
}

export const CategorySearchResults = (props: Props) => {
  return (
    <ContentLayout title="Kategorije" autoSpace>
      <View className="gap-md">
        <BootyBayCardBuilder
          data={props.query.data?.searchCategories}
          renderItem={(e) => {
            const source = e.item?.imageUrl ?? getRandomImage()
            return e.item ? (
              <BootyBayCard source={source} description={`${e.item.itemsCount} Proizvoda`} title={e.item.name} />
            ) : null
          }}
        />
      </View>
    </ContentLayout>
  )
}
