import { SearchPageQuery } from "@/gql/generated/graphql"
import { UseQueryResult } from "@tanstack/react-query"

import { Button } from "@/components/ui/button"
import { InfoCard } from "@/components/ui/cards/info-card/info-card"
import { InfoCardBuilder } from "@/components/ui/cards/info-card/info-card-builder"
import { ContentLayout } from "@/components/ui/content-layout"

type Props = {
  query: UseQueryResult<SearchPageQuery, Error>
}

export default function ItemsSearchResults(props: Props) {
  return (
    <ContentLayout title="Proizvodi" action={<SeeAll />}>
      <InfoCardBuilder
        isLoading={props.query.isLoading}
        data={props.query.data?.searchItems?.edges}
        renderItem={(e) => <InfoCard title={e.item?.node?.name ?? "no nome"} />}
      />
    </ContentLayout>
  )
}

const SeeAll = () => {
  return <Button title="Prikaži sve" size="sm" variant="secondary" />
}
