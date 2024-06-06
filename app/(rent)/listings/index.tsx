import React from "react"
import { useMyListings } from "@/features/listings/store/use-my-listings"
import { useMyListingsQuery } from "@/gql/hooks/items"
import { ActivityIndicator, RefreshControl, ScrollView, View } from "react-native"

import { BootyBayCard } from "@/components/ui/cards/bootybay-card/bootybay-card"
import { BootyBayCardBuilder } from "@/components/ui/cards/bootybay-card/bootybay-card-builder"
import { FadeIn } from "@/components/animations/fade-in"

export default function Listings() {
  const [refreshing, setRefreshing] = React.useState(false)
  const { active } = useMyListings()
  const { data, isLoading, refetch } = useMyListingsQuery({ input: { active } })

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    await refetch()
    setRefreshing(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loading = (
    <FadeIn>
      <ActivityIndicator />
    </FadeIn>
  )

  const content = (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} className="pt-sm">
      <FadeIn>
        <BootyBayCardBuilder
          data={data?.me?.items}
          renderItem={({ item }) =>
            item ? <BootyBayCard title={item.name} description={item.pricePerDay} key={item.id} /> : null
          }
        />
      </FadeIn>
    </ScrollView>
  )

  const renderContent = isLoading ? loading : content

  return <View className="px-screen">{renderContent}</View>
}
