const index = "/"

export const routes = {
  index: index,
  loginModal: "login-modal",
  explore: "(explore)",
  rent: "(rent)",
  myItems: "(rent)/listings",
  loginWithEmail: "login-with-email",
  createItem: "create-item",
  createItemInfo: "create-item/info",
  createItemPrice: "create-item/price",
  createItemPreview: "create-item/preview",
  createItemSuccess: "/create-item/success",
  filterListingsModal: "filter-listings-modal",
  item: {
    index: "/item/[id]/[name]",
    editPhotos: "/item/[id]/[name]/edit-photos-modal",
    editDescription: "/item/[id]/[name]/edit-description-modal",
    editPrice: "/item/[id]/[name]/edit-price-modal",
    editDelivery: "/item/[id]/[name]/edit-delivery-modal",
  },
} as const

export type RouteKeys = keyof typeof routes
export type RouteValues = (typeof routes)[RouteKeys]
