import SecureView from "@/features/auth/components/secure_view"
import { useMyListingsQuery } from "@/gql/hooks/user"
import { ActivityIndicator, ScrollView } from "react-native"

import { BootyBayCard } from "@/components/ui/cards/bootybay-card/bootybay-card"
import { BootyBayCardBuilder } from "@/components/ui/cards/bootybay-card/bootybay-card-builder"
import { ContentLayout } from "@/components/ui/content-layout"

export default function Listings() {
  const { data, isLoading } = useMyListingsQuery()

  if (isLoading) return <ActivityIndicator />
  if (!data?.me?.items) return null
  return (
    <ScrollView>
      <SecureView>
        <ContentLayout variant="leading" title="Moji oglasi" className="mt-2xl" childrenClassName="p-screen">
          <BootyBayCardBuilder
            data={data?.me?.items}
            renderItem={({ item }) =>
              item ? <BootyBayCard title={item.name} description={item.pricePerDay} key={item.id} /> : null
            }
          />
        </ContentLayout>
      </SecureView>
    </ScrollView>
  )
}
