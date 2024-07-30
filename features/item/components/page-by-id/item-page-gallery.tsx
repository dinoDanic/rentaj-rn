import { ItemByIdQuery } from "@/gql/generated/graphql"

import { ImageSlider } from "@/components/ui/image-slider"

const chubby = [
  "https://img.freepik.com/free-psd/product-display-3d-podium-background_47987-11315.jpg?ga=GA1.1.495706252.1719334737&semt=sph",
  "https://img.freepik.com/free-photo/skin-care-product-beige-stones_23-2148761437.jpg?ga=GA1.1.495706252.1719334737&semt=sph",
  "https://img.freepik.com/free-psd/product-display-3d-podium-background_47987-11307.jpg?ga=GA1.1.495706252.1719334737&semt=sph",
]

export const ItemPageGallery = ({ itemById }: ItemByIdQuery) => {
  const itemImages = itemById?.images?.map((image) => image?.imageUrl ?? "")
  const imagesUrls = Boolean(itemImages?.length) ? itemImages || chubby : chubby

  return <ImageSlider images={imagesUrls} />
}
