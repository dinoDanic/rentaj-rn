const index = "/"

export const routes = {
  index: index,
  loginModal: "login-modal",
  explore: "(explore)",
  rent: "(rent)",
  myItems: "(rent)/listings",
  loginWithEmail: "login-with-email",
  createItem: {
    index: "create-item",
    info: "create-item/info",
    price: "create-item/price",
    preview: "create-item/preview",
    success: "/create-item/success",
    listingsModal: "filter-listings-modal",
    category: "create-item/[category-id]",
    location: "/create-item/location",
  },
  item: {
    index: "/item/[id]/[name]",
    editPhotos: "/item/[id]/[name]/edit-photos-modal",
    editDescription: "/item/[id]/[name]/edit-description-modal",
    editPrice: "/item/[id]/[name]/edit-price-modal",
    editDelivery: "/item/[id]/[name]/edit-delivery-modal",
  },
  order: {
    new: {
      index: "/order/new/[id]",
    },
  },
} as const

export type RouteKeys = keyof typeof routes
export type RouteValues = (typeof routes)[RouteKeys]
