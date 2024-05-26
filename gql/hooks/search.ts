import { _client } from "@/lib"
import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query"

import {
  SearchCategoriesDocument,
  SearchCategoriesQuery,
  SearchInput,
  SearchItemsDocument,
  SearchItemsQuery,
  SearchItemsQueryVariables,
  SearchPageDocument,
  SearchPageQuery,
  SearchPageQueryVariables,
} from "../generated/graphql"

export const querySearchKeys = {
  searchPage: (variables: SearchPageQueryVariables) => ["search-page", variables],
  searchItems: (input: SearchItemsQueryVariables) => ["search-items", input],
  searchCategories: (input: SearchInput) => ["search-categories", input],
}

export const useSearchPage = (
  variables: SearchPageQueryVariables,
  options?: Partial<UseQueryOptions<SearchPageQuery, Error>>
): UseQueryResult<SearchPageQuery, Error> =>
  useQuery<SearchPageQuery, Error>({
    queryKey: querySearchKeys.searchPage(variables),
    queryFn: () => _client.request(SearchPageDocument, variables),
    ...options,
  })

export const useSearchItems = (
  input: SearchItemsQueryVariables,
  options?: Partial<UseQueryOptions<SearchItemsQuery, Error>>
): UseQueryResult<SearchItemsQuery, Error> =>
  useQuery<SearchItemsQuery, Error>({
    queryKey: querySearchKeys.searchItems(input),
    queryFn: () => _client.request(SearchItemsDocument, input),
    ...options,
  })

export const useSearchCategories = (
  input: SearchInput,
  options?: Partial<UseQueryOptions<SearchCategoriesQuery, Error>>
): UseQueryResult<SearchCategoriesQuery, Error> =>
  useQuery<SearchCategoriesQuery, Error>({
    queryKey: querySearchKeys.searchCategories(input),
    queryFn: () => _client.request(SearchCategoriesDocument, { input }),
    ...options,
  })
