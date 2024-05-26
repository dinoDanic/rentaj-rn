import { SearchInput } from "@/gql/generated/graphql"
import { create } from "zustand"

type SearchState = Pick<SearchInput, "query"> & {
  setQuery: (value: string) => void
}

export const useSearch = create<SearchState>()((set) => ({
  query: "",
  setQuery: (value) => set((state) => ({ query: value })),
}))
