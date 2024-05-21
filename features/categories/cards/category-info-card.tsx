import { FC } from "react"
import { Category } from "@/gql/generated/graphql"

import { InfoCard } from "@/components/ui/cards/info-card"

export const CategoryInfoCard: FC<Category> = (category) => {
  return <InfoCard title={category.name} />
}
