import { _client } from "@/lib"
import { useQuery } from "@tanstack/react-query"

import { CategoriesDocument, ParentCategoriesDocument } from "../generated/graphql"

export const queryCategorieKeys = {
  categires: ["categories"],
  parentCategories: ["parent-categories"],
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
