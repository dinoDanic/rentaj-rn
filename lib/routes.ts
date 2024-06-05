const index = "/"

export const routes = {
  index: index,
  loginModal: "login-modal",
  explore: "(explore)",
  rent: "(rent)",
  loginWithEmail: "login-with-email",
  createItem: "create-item",
  createItemInfo: "create-item/info",
  filterListingsModal: "filter-listings-modal",
} as const

export type RouteKeys = keyof typeof routes
export type RouteValues = (typeof routes)[RouteKeys]
