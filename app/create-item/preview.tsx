import { CreateItemForm } from "@/features/listings/types"
import { CreateItemDocument, CreateItemMutationVariables } from "@/gql/generated/graphql"
import { _client } from "@/lib"
import { useMutation } from "@tanstack/react-query"
import { Image } from "expo-image"
import { Link, router } from "expo-router"
import { useFormContext } from "react-hook-form"
import { View } from "react-native"

import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { BaseCard } from "@/components/ui/cards/base-card"
import { Text } from "@/components/ui/text"
import { H2, Small } from "@/components/ui/typography"

export default function PreviewPage() {
  const form = useFormContext<CreateItemForm>()
  const formData = form.getValues()

  const createItemMutation = useMutation({
    mutationFn: (args: CreateItemMutationVariables) => _client.request(CreateItemDocument, args),
  })

  const create = async (data: CreateItemForm) => {
    try {
      const res = await createItemMutation.mutateAsync({
        input: {
          pricePerDay: data.pricePerDay.toString(),
          name: data.name,
          pickUp: true,
          delivery: false,
          categoryId: data.category.id,
          locationId: "1",
          description: data.description,
          capara: "0.00",
        },
      })
      if (res.createItem?.id) {
        router.push(routes.createItemSuccess)
      }
    } catch {
      //
    }
  }

  return (
    <View className="flex-1 justify-between px-screen pt-lg">
      <View className="gap-md">
        <Link href={routes.createItemInfo}>
          <H2>{formData.name}</H2>
        </Link>
        <Link href={routes.createItemInfo}>
          <Small>{formData.description}</Small>
        </Link>
        <View className="flex-row gap-sm">
          {formData.images.map((image) => (
            <Image key={image.uri} source={image.uri} style={{ width: 100, height: 100, borderRadius: 10 }} />
          ))}
        </View>
        <Link href={routes.createItemPrice}>
          <BaseCard className="w-full flex-row justify-between">
            <Text>Cijena po danu:</Text>
            <Text>{formData.pricePerDay.toFixed(2)} Eur</Text>
          </BaseCard>
        </Link>
      </View>
      <Button loading={createItemMutation.isPending} title="Kreiraj" onPress={form.handleSubmit(create)} />
    </View>
  )
}
