import { FC } from "react"
import { Category } from "@/gql/generated/graphql"

import { InfoCard } from "@/components/ui/cards/info-card/info-card"

type CategoryInfoCardProps = {
  category: Category
  className?: string
}

export const CategoryInfoCard: FC<CategoryInfoCardProps> = (props) => {
  return <InfoCard className={props.className} source={null} title={props.category.name} />
}
