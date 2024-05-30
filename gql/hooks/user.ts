import { _client } from "@/lib"
import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query"

import { MeDocument, MeQuery, MeQueryVariables } from "../generated/graphql"

export const queryUserKeys = {
  me: ["me"],
}

export const useMe = (
  variables?: MeQueryVariables,
  options?: Partial<UseQueryOptions<MeQuery, Error>>
): UseQueryResult<MeQuery, Error> =>
  useQuery<MeQuery, Error>({
    queryKey: queryUserKeys.me,
    queryFn: () => _client.request(MeDocument, variables),
    ...options,
  })
