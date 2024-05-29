const index = "/"
// const auth = "/";

export const routes = {
  index: index,
  loginModal: "login-modal",
  explore: "(explore)",
  rent: "(rent)",
  loginWithEmail: "login-with-email",
} as const

export type RouteKeys = keyof typeof routes
export type RouteValues = (typeof routes)[RouteKeys]
