import React from "react"
import { RenderInfoCategories } from "@/features/home/components/category-info-list/render-info-categories"
import RenderHeroFeature from "@/features/home/components/render-hero-feautred"
import { queryCategorieKeys } from "@/gql/hooks/categories"
import { Redirect } from "expo-router"
import { RefreshControl, ScrollView, View } from "react-native"

import { queryClient } from "@/lib/react-query/query-client"
import { routes } from "@/lib/routes"
import { SafeAreaView } from "@/components/ui/safe-area-view"

export default function Index() {
  const [refreshing, setRefreshing] = React.useState(false)

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    await queryClient.invalidateQueries({ queryKey: queryCategorieKeys.parentCategories })
    setRefreshing(false)
  }, [])

  // return <Redirect href={{ pathname: routes.item.index, params: { id: "1", name: "Kita" } }} />

  return (
    <>
      <SafeAreaView />
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View className="gap-2xl">
          <RenderHeroFeature />
          <RenderInfoCategories />
        </View>
      </ScrollView>
    </>
  )
}
