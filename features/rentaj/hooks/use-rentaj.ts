import { router } from "expo-router"
import { create } from "zustand"

import { routes } from "@/lib/routes"

import { RentajView } from "../types"

export type RentajState = {
  view: RentajView
  setView: (value: RentajView) => void
  toggleView: () => void
}

export const useRentaj = create<RentajState>()((set, store) => ({
  view: "explore",
  setView: (value) => set({ view: value }),
  toggleView: () => {
    if (store().view === "explore") {
      router.replace(routes.rent)
      set({ view: "rent" })
    } else {
      router.replace(routes.explore)
      set({ view: "explore" })
    }
  },
}))
