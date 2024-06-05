import { _client } from "@/lib"
import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query"

import {
  CategoriesDocument,
  CategoryByIdDocument,
  CategoryByIdQuery,
  CategoryByIdQueryVariables,
  ParentCategoriesDocument,
  SelectParentCategoriesDocument,
  SelectParentCategoriesQuery,
  SelectParentCategoriesQueryVariables,
} from "../generated/graphql"

export const queryCategorieKeys = {
  categires: ["categories"],
  parentCategories: ["parent-categories"],
  selectParentCategory: (args: SelectParentCategoriesQueryVariables) => ["select-category", args],
  categoryById: (args: CategoryByIdQueryVariables) => ["category-by-id", args],
}

export const useCategoriesQuery = () =>
  useQuery({
    queryKey: queryCategorieKeys.categires,
    queryFn: () => _client.request(CategoriesDocument),
  })

export const useParentCategoriesQuery = () =>
  useQuery({
    queryKey: queryCategorieKeys.parentCategories,
    queryFn: () => _client.request(ParentCategoriesDocument),
  })

export const useSelectParentCategoryQuery = (
  variables: SelectParentCategoriesQueryVariables,
  options?: Partial<UseQueryOptions<SelectParentCategoriesQuery, Error>>
): UseQueryResult<SelectParentCategoriesQuery, Error> =>
  useQuery<SelectParentCategoriesQuery, Error>({
    queryKey: queryCategorieKeys.selectParentCategory(variables),
    queryFn: () => _client.request(SelectParentCategoriesDocument, variables),
    ...options,
  })

export const useCategoryById = (
  variables: CategoryByIdQueryVariables,
  options?: Partial<UseQueryOptions<CategoryByIdQuery, Error>>
): UseQueryResult<CategoryByIdQuery, Error> =>
  useQuery<CategoryByIdQuery, Error>({
    queryKey: queryCategorieKeys.categoryById(variables),
    queryFn: () => _client.request(CategoryByIdDocument, variables),
    ...options,
  })
