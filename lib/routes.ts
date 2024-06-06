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
  createItemSuccess: "create-item/success",
  filterListingsModal: "filter-listings-modal",
} as const

export type RouteKeys = keyof typeof routes
export type RouteValues = (typeof routes)[RouteKeys]
