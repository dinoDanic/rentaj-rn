import { useEffect, useState } from "react"
import { CreateItemForm } from "@/features/listings/types"
import { useSearchCategories } from "@/gql/hooks/search"
import { useDebounce } from "@/helpers/use-debounce"
import { MotiView } from "moti"
import { useFormContext } from "react-hook-form"
import { ActivityIndicator } from "react-native"

import { BaseListBuilder } from "@/components/ui/lists/base-list/base-list-builder"
import { BaseListItem } from "@/components/ui/lists/base-list/base-list-item"
import { Text } from "@/components/ui/text"
import { FadeIn } from "@/components/animations/fade-in"

export const SearchCategories = () => {
  const form = useFormContext<CreateItemForm>()
  const [isTyping, setIsTyping] = useState(false)
  const query = form.watch("searchCategoryQuery")
  const { data, isLoading, refetch } = useSearchCategories({ query: query }, { enabled: false })
  const debouncedRefetch = useDebounce(refetch, 300)
  const debouncedTyping = useDebounce(() => setIsTyping(false), 300)

  const haveItems: boolean = Boolean(data?.searchCategories?.length)

  const noSearchResults: boolean = !haveItems && !isLoading && !isTyping

  useEffect(() => {
    setIsTyping(true)
    debouncedRefetch()
    debouncedTyping()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  if (noSearchResults)
    return (
      <FadeIn className="min-h-[100] justify-center">
        <Text className="text-center">Nema rezultata</Text>
      </FadeIn>
    )
  if (isLoading || isTyping) {
    return <ActivityIndicator />
  }

  return (
    <MotiView
      // className="min-h-[100] justify-center"
      from={{ height: 0 }}
      animate={{ height: data?.searchCategories ? 300 : 0 }}
      transition={{ type: "spring" }}
    >
      {data?.searchCategories && (
        <BaseListBuilder
          data={data.searchCategories}
          renderItem={(e) => (e.item ? <BaseListItem onPress={() => {}} key={e.item?.id} name={e.item?.name} /> : null)}
        />
      )}
    </MotiView>
  )
}
