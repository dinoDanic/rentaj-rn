import { User } from "@/gql/generated/graphql"
import { create } from "zustand"

type meState = {
  me: User | null
  setMe: (user: User | null) => void
}

export const useMe = create<meState>()((set) => ({
  me: null,
  setMe: (me) => set({ me }),
}))
