const index = "/"

export const routes = {
  index: index,
  loginModal: "login-modal",
  explore: "(explore)",
  rent: "(rent)",
  loginWithEmail: "login-with-email",
  createItem: "create-item",
  createItemStepTwo: "create-item/step-two",
  filterListingsModal: "filter-listings-modal",
} as const

export type RouteKeys = keyof typeof routes
export type RouteValues = (typeof routes)[RouteKeys]
