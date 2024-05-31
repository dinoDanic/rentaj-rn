import SecureView from "@/features/auth/components/secure_view"
import { ListingsHeader } from "@/features/listings/components/listings-header/listings-header"
import { MyListingsQueryVariables } from "@/gql/generated/graphql"
import { useMyListingsQuery } from "@/gql/hooks/items"
import { FormProvider, useForm } from "react-hook-form"
import { ActivityIndicator, ScrollView, View } from "react-native"

import { BootyBayCard } from "@/components/ui/cards/bootybay-card/bootybay-card"
import { BootyBayCardBuilder } from "@/components/ui/cards/bootybay-card/bootybay-card-builder"
import { FadeIn } from "@/components/animations/fade-in"

export default function Listings() {
  const form = useForm<MyListingsQueryVariables>({ defaultValues: { input: { active: true } } })
  const { data, isLoading } = useMyListingsQuery({ input: form.watch().input })

  const loading = (
    <FadeIn>
      <ActivityIndicator />
    </FadeIn>
  )

  const content = (
    <FadeIn>
      <ScrollView className="pt-sm">
        <SecureView>
          <BootyBayCardBuilder
            data={data?.me?.items}
            renderItem={({ item }) =>
              item ? <BootyBayCard title={item.name} description={item.pricePerDay} key={item.id} /> : null
            }
          />
        </SecureView>
      </ScrollView>
    </FadeIn>
  )

  const renderContent = isLoading ? loading : content

  return (
    <View className="px-screen">
      <FormProvider {...form}>
        <ListingsHeader />
        {renderContent}
      </FormProvider>
    </View>
  )
}
