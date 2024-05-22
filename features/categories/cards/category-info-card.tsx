import { FC } from "react"
import { Category } from "@/gql/generated/graphql"

import { InfoCard } from "@/components/ui/cards/info-card"

type CategoryInfoCardProps = {
  category: Category
  className?: string
}

export const CategoryInfoCard: FC<CategoryInfoCardProps> = (props) => {
  return <InfoCard className={props.className} source={props.category?.imageUrl} title={props.category.name} />
}
