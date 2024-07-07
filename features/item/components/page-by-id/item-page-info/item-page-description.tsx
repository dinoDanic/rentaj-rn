import { ItemByIdQuery } from "@/gql/generated/graphql"

import { Muted } from "@/components/ui/typography"

export const ItemPageDescription = ({ itemById }: ItemByIdQuery) => {
  return <Muted>{itemById?.description}</Muted>
}
