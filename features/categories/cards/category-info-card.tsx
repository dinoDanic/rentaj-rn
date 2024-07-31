import { FC } from "react"
import { Category } from "@/gql/generated/graphql"
import { getRandomImage } from "@/helpers/images"

import { InfoCard } from "@/components/ui/cards/info-card/info-card"

type CategoryInfoCardProps = {
  category: Category
  className?: string
}

export const CategoryInfoCard: FC<CategoryInfoCardProps> = (props) => {
  const image = props?.category.imageUrl ?? getRandomImage()
  return <InfoCard className={props.className} source={image} title={props.category.name} />
}
