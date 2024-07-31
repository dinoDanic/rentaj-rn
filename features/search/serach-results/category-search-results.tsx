import { SearchPageQuery } from "@/gql/generated/graphql"
import { UseQueryResult } from "@tanstack/react-query"
import { View } from "react-native"

import { Button } from "@/components/ui/button"
import { BootyBayCard } from "@/components/ui/cards/bootybay-card/bootybay-card"
import { BootyBayCardBuilder } from "@/components/ui/cards/bootybay-card/bootybay-card-builder"
import { ContentLayout } from "@/components/ui/content-layout"

type Props = {
  query: UseQueryResult<SearchPageQuery, Error>
}

export const CategorySearchResults = (props: Props) => {
  return (
    <ContentLayout title="Kategorije" autoSpace action={<SeeAll />}>
      <View className="gap-md">
        <BootyBayCardBuilder
          data={props.query.data?.searchCategories}
          renderItem={(e) =>
            e.item ? <BootyBayCard description={`${e.item.itemsCount} Proizvoda`} title={e.item.name} /> : null
          }
        />
      </View>
    </ContentLayout>
  )
}

const SeeAll = () => {
  return <Button title="Prikaži sve" size="sm" variant="secondary" />
}
