import { _client } from "@/lib"
import { useMutation, useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query"

import {
  CreateItemDocument,
  CreateItemMutationVariables,
  ItemByIdDocument,
  ItemByIdQuery,
  ItemByIdQueryVariables,
  MyListingsDocument,
  MyListingsQuery,
  MyListingsQueryVariables,
} from "../generated/graphql"

export const queryItemKeys = {
  myListingsAll: ["my-listings"],
  myListings: (args: MyListingsQueryVariables) => ["my-listings", args],
  itemById: (args: ItemByIdQueryVariables) => ["item-by-id", args],
}

export const useMyListingsQuery = (
  variables: MyListingsQueryVariables,
  options?: Partial<UseQueryOptions<MyListingsQuery, Error>>
): UseQueryResult<MyListingsQuery, Error> =>
  useQuery<MyListingsQuery, Error>({
    queryKey: queryItemKeys.myListings(variables),
    queryFn: () => _client.request(MyListingsDocument, variables),
    ...options,
  })

export const useCreateItemMutation = () =>
  useMutation({
    mutationFn: (variables: CreateItemMutationVariables) => _client.request(CreateItemDocument, variables),
  })

export const useItemByIdQuery = (
  variables: ItemByIdQueryVariables,
  options?: Partial<UseQueryOptions<ItemByIdQuery, Error>>
): UseQueryResult<ItemByIdQuery, Error> =>
  useQuery<ItemByIdQuery, Error>({
    queryKey: queryItemKeys.itemById(variables),
    queryFn: () => _client.request(ItemByIdDocument, variables),
    ...options,
  })
