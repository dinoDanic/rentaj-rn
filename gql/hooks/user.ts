import { _client } from "@/lib"
import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query"

import { MeDocument, MeQuery, MeQueryVariables, MyListingsQueryVariables } from "../generated/graphql"

export const queryUserKeys = {
  me: ["me"],
  myListings: (args: MyListingsQueryVariables) => ["my-listings", args],
}

export const useMeQuery = (
  variables?: MeQueryVariables,
  options?: Partial<UseQueryOptions<MeQuery, Error>>
): UseQueryResult<MeQuery, Error> =>
  useQuery<MeQuery, Error>({
    queryKey: queryUserKeys.me,
    queryFn: () => _client.request(MeDocument, variables),
    ...options,
  })
