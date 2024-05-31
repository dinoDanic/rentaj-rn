import { _client } from "@/lib"
import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query"

import { MyListingsDocument, MyListingsQuery, MyListingsQueryVariables } from "../generated/graphql"

export const queryListingsKeys = {
  myListings: (args: MyListingsQueryVariables) => ["my-listings", args],
}

export const useMyListingsQuery = (
  variables: MyListingsQueryVariables,
  options?: Partial<UseQueryOptions<MyListingsQuery, Error>>
): UseQueryResult<MyListingsQuery, Error> =>
  useQuery<MyListingsQuery, Error>({
    queryKey: queryListingsKeys.myListings(variables),
    queryFn: () => _client.request(MyListingsDocument, variables),
    ...options,
  })
