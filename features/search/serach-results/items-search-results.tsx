import { SearchPageQuery } from "@/gql/generated/graphql"
import { UseQueryResult } from "@tanstack/react-query"

import { Button } from "@/components/ui/button"
import { TallCard } from "@/components/ui/cards/tall-card/tall-card"
import { TallCardBuilder } from "@/components/ui/cards/tall-card/tall-card-builder"
import { ContentLayout } from "@/components/ui/content-layout"

type Props = {
  query: UseQueryResult<SearchPageQuery, Error>
}

export default function ItemsSearchResults(props: Props) {
  return (
    <ContentLayout childrenClassName="p-0" title="Proizvodi" action={<SeeAll />}>
      <TallCardBuilder
        data={props.query.data?.searchItems?.edges}
        renderItem={(e) => {
          const { node: item } = e.item || {}
          if (!item) return null
          const city = item.location.city

          const withDelivery = `${city} 🚗`
          const withoutDelivery = city
          const title = item.delivery ? withDelivery : withoutDelivery
          return <TallCard text1={item.name} price={item.pricePerDay} footer={{ title: title }} />
        }}
      />
    </ContentLayout>
  )
}

const SeeAll = () => {
  return <Button title="Prikaži sve" size="sm" variant="secondary" />
}
