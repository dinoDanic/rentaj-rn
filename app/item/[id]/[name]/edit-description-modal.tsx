import { useEffect } from "react"
import { Item, UpdateItemDocument, UpdateItemInput, UpdateItemMutationVariables } from "@/gql/generated/graphql"
import { queryItemKeys, useItemByIdQuery } from "@/gql/hooks/items"
import { _client } from "@/lib"
import { useMutation } from "@tanstack/react-query"
import { useLocalSearchParams, useRouter } from "expo-router"
import { FormProvider, useForm } from "react-hook-form"
import { SafeAreaView, ScrollView, View } from "react-native"

import { queryClient } from "@/lib/react-query/query-client"
import { Button } from "@/components/ui/button"
import { FormTextArea } from "@/components/ui/form/form-text-area"

import { ItemSearchPageParams } from "."

export default function Page() {
  const params = useLocalSearchParams<ItemSearchPageParams>()

  const form = useForm<Item>()
  const router = useRouter()

  const { data } = useItemByIdQuery({ input: { itemId: params.id! } }, { enabled: Boolean(params.id) })

  const updateItemMutation = useMutation({
    mutationFn: (args: UpdateItemMutationVariables) => _client.request(UpdateItemDocument, args),
  })

  useEffect(() => {
    if (data?.itemById) {
      form.reset(data?.itemById)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const submit = async (data: Item) => {
    if (!params.id) return
    await updateItemMutation.mutateAsync({ id: params.id, input: { description: data.description } })
    const key = queryItemKeys.itemById({ input: { itemId: params.id } })
    queryClient.resetQueries({ queryKey: key })
    router.back()
  }

  return (
    <FormProvider {...form}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" keyboardDismissMode="on-drag">
        <View className="p-screen">
          <FormTextArea<UpdateItemInput> name="description" numberOfLines={10} className="border-transparent p-0" />
        </View>
      </ScrollView>
      <View className="gap-sm p-screen">
        <Button loading={updateItemMutation.isPending} title="Spremi" onPress={form.handleSubmit(submit)} />
        <Button title="Ponisti" variant="secondary" onPress={() => router.back()} />
      </View>
      <SafeAreaView />
    </FormProvider>
  )
}
