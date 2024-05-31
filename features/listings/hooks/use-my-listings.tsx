import { MyListingsQueryVariables } from "@/gql/generated/graphql"
import { create } from "zustand"

type MyListingsState = {
  setMyListingsActive: (state: boolean) => void
  setMyListings: (variables: MyListingsQueryVariables) => void
} & MyListingsQueryVariables

export const useMyListings = create<MyListingsState>()((set, state) => ({
  input: {
    active: true,
  },
  setMyListingsActive: (value) => set({ input: { ...state().input, active: value } }),
  setMyListings: (value) => set({ input: value.input }),
}))
