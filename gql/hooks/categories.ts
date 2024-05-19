import { _client } from "@/lib"
import { useQuery } from "@tanstack/react-query"

import { CategoriesDocument, ParentCategoriesDocument } from "../generated/graphql"

export const useCategoriesQuery = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: () => _client.request(CategoriesDocument),
  })

export const useParentCategoriesQuery = () =>
  useQuery({
    queryKey: ["parent-categories"],
    queryFn: () => _client.request(ParentCategoriesDocument),
  })
