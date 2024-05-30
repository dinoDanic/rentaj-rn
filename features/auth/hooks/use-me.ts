import { User } from "@/gql/generated/graphql"
import { create } from "zustand"

type meState = {
  user: User | null
  setMe: (user: User | null) => void
}

export const useMe = create<meState>()((set) => ({
  user: null,
  setMe: (user) => set({ user }),
}))
