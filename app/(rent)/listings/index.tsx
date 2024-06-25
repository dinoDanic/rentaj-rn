import React from "react"
import { useMyListings } from "@/features/listings/store/use-my-listings"
import { useMyListingsQuery } from "@/gql/hooks/items"
import { router } from "expo-router"
import { ActivityIndicator, RefreshControl, ScrollView } from "react-native"

import { routes } from "@/lib/routes"
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
    <FadeIn>
      <BootyBayCardBuilder
        data={data?.me?.items}
        renderItem={({ item }) =>
          item ? (
            <BootyBayCard
              onPress={() => router.push(`${routes.item.index}/${item.id}/${item.name}`)}
              title={item.name}
              description={item.pricePerDay}
              key={item.id}
            />
          ) : null
        }
      />
    </FadeIn>
  )

  const renderContent = isLoading ? loading : content

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        className="pt-lg"
      >
        {renderContent}
      </ScrollView>
    </>
  )
}
