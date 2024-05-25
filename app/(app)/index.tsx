import React from "react"
import { RenderInfoCategories } from "@/features/categories/components/render-info-categories"
import RenderHeroFeature from "@/features/home/components/render-hero-feautred"
import { queryCategorieKeys } from "@/gql/hooks/categories"
import { RefreshControl, ScrollView, View } from "react-native"

import { queryClient } from "@/lib/react-query/query-client"

export default function Index() {
  const [refreshing, setRefreshing] = React.useState(false)

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    await queryClient.invalidateQueries({ queryKey: queryCategorieKeys.parentCategories })
    setRefreshing(false)
  }, [])

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View className="gap-2xl">
        <RenderHeroFeature />
        <RenderInfoCategories />
      </View>
    </ScrollView>
  )
}
