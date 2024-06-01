import { _client } from "@/lib"
import { useMutation, useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query"

import {
  CreateItemDocument,
  CreateItemMutationVariables,
  MyListingsDocument,
  MyListingsQuery,
  MyListingsQueryVariables,
} from "../generated/graphql"

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

export const useCreateItemMutation = () =>
  useMutation({
    mutationFn: (variables: CreateItemMutationVariables) => _client.request(CreateItemDocument, variables),
  })
