import { ItemByIdQuery } from "@/gql/generated/graphql"

import { ContentLayout } from "@/components/ui/content-layout"
import { Muted } from "@/components/ui/typography"

type Props = ItemByIdQuery

export const ItemPageLocation = ({ itemById }: Props) => {
  return (
    <ContentLayout title="Lokacija">
      <Muted>Location</Muted>
    </ContentLayout>
  )
}
