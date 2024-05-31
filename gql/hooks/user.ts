import { _client } from "@/lib"
import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query"

import {
  MeDocument,
  MeQuery,
  MeQueryVariables,
  MyListingsDocument,
  MyListingsQuery,
  MyListingsQueryVariables,
} from "../generated/graphql"

export const queryUserKeys = {
  me: ["me"],
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

export const useMyListingsQuery = (
  variables?: MyListingsQueryVariables,
  options?: Partial<UseQueryOptions<MyListingsQuery, Error>>
): UseQueryResult<MyListingsQuery, Error> =>
  useQuery<MyListingsQuery, Error>({
    queryKey: queryUserKeys.me,
    queryFn: () => _client.request(MyListingsDocument, variables),
    ...options,
  })
