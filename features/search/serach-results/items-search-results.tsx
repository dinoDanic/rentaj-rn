import { SearchPageQuery } from "@/gql/generated/graphql"
import { getRandomImage, randomImages } from "@/helpers/images"
import { UseQueryResult } from "@tanstack/react-query"
import { Link } from "expo-router"

import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { TallCard } from "@/components/ui/cards/tall-card/tall-card"
import { TallCardBuilder } from "@/components/ui/cards/tall-card/tall-card-builder"
import { ContentLayout } from "@/components/ui/content-layout"

type Props = {
  query: UseQueryResult<SearchPageQuery, Error>
}

export default function ItemsSearchResults(props: Props) {
  return (
    <ContentLayout title="Proizvodi" autoSpace action={<SeeAll />}>
      <TallCardBuilder
        data={props.query.data?.searchItems?.edges}
        renderItem={(e) => {
          const { node: item } = e.item || {}
          if (!item) return null
          const city = item.location.city

          const withDelivery = `${city} 🚗`
          const withoutDelivery = city
          const title = item.delivery ? withDelivery : withoutDelivery
          const randomImage = getRandomImage()
          const itemImage = item.images?.at(0)?.imageUrl
          const image = itemImage ?? randomImage
          return (
            <Link href={{ pathname: routes.item.index, params: { id: item.id, name: item.name } }}>
              <TallCard text1={item.name} price={item.pricePerDay} footer={{ title: title }} source={image} />
            </Link>
          )
        }}
      />
    </ContentLayout>
  )
}

const SeeAll = () => {
  return <Button title="Prikaži sve" size="sm" variant="secondary" />
}
