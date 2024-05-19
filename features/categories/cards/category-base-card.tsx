import { FC } from "react"
import { Category } from "@/gql/generated/graphql"

import { Text } from "@/components/ui/text"

export const CategoryBaseCard: FC<Category> = (category) => {
  return <Text>{category.name}</Text>
}
