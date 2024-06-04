import { FilterItems } from "@/gql/generated/graphql"
import { create } from "zustand"

type MyListingsState = {
  setActive: (arg: boolean) => void
} & FilterItems

export const useMyListings = create<MyListingsState>()((set) => ({
  active: true,
  setActive: (active) => set({ active }),
}))
