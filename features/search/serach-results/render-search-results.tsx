import { useEffect, useState } from "react"
import { useSearchPage } from "@/gql/hooks/search"
import { useDebounce } from "@/helpers/use-debounce"
import { MotiView } from "moti"
import { View } from "react-native"

import { Large } from "@/components/ui/typography"

import { useSearch } from "../hooks/use-search"
import { CategorySearchResults } from "./category-search-results"
import ItemsSearchResults from "./items-search-results"

export const RenderSearchResults = () => {
  const { query } = useSearch()
  const [isTyping, setIsTyping] = useState(false)

  const searchQuery = useSearchPage({ input: { query }, first: 10 }, { enabled: false })
  const debouncedRefetch = useDebounce(searchQuery.refetch, 300)
  const debouncedTyping = useDebounce(() => setIsTyping(false), 300)

  const { searchItems, searchCategories } = searchQuery.data || {}
  const haveItems: boolean = Boolean(searchItems?.edges?.length)
  const haveCategories: boolean = Boolean(searchCategories?.length)

  const noSearchResults: boolean = !haveItems && !haveCategories && !searchQuery.isLoading && !isTyping

  useEffect(() => {
    setIsTyping(true)
    debouncedRefetch()
    debouncedTyping()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  if (noSearchResults)
    return (
      <MotiView from={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring" }}>
        <Large>Nema rezultata</Large>
      </MotiView>
    )

  return (
    <View className="gap-lg">
      {haveItems && <ItemsSearchResults query={searchQuery} />}
      {haveCategories && <CategorySearchResults query={searchQuery} />}
    </View>
  )
}
