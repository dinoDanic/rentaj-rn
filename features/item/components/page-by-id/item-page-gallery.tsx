import { ItemByIdQuery } from "@/gql/generated/graphql"
import { getRandomImages } from "@/helpers/images"

import { ImageSlider } from "@/components/ui/image-slider"

export const ItemPageGallery = ({ itemById }: ItemByIdQuery) => {
  const itemImages = itemById?.images?.map((image) => image?.imageUrl ?? "")
  const randomImages = getRandomImages(5)
  const imagesUrls = Boolean(itemImages?.length) ? itemImages || randomImages : randomImages

  return <ImageSlider images={imagesUrls} />
}
