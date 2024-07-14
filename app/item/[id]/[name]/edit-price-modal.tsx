import { useEffect } from "react"
import { Item, UpdateItemDocument, UpdateItemInput, UpdateItemMutationVariables } from "@/gql/generated/graphql"
import { queryItemKeys, useItemByIdQuery } from "@/gql/hooks/items"
import { _client } from "@/lib"
import { ZodType } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useLocalSearchParams, useRouter } from "expo-router"
import { FormProvider, useForm } from "react-hook-form"
import { SafeAreaView, ScrollView, View } from "react-native"
import { z } from "zod"

import { queryClient } from "@/lib/react-query/query-client"
import { Button } from "@/components/ui/button"
import { FormCurrencyInput } from "@/components/ui/form/form-input"
import { FormSelect } from "@/components/ui/form/form-select"

import { ItemSearchPageParams } from "."

const formSchema = z.object<ZodType<UpdateItemInput>>({
  pricePerDay: z.number().min(0),
  capara: z.number().min(0),
})

export default function Page() {
  const params = useLocalSearchParams<ItemSearchPageParams>()

  const form = useForm<Item>({
    resolver: zodResolver(formSchema),
  })

  const router = useRouter()

  const { data } = useItemByIdQuery({ input: { itemId: params.id! } }, { enabled: Boolean(params.id) })

  const updateItemMutation = useMutation({
    mutationFn: (args: UpdateItemMutationVariables) => _client.request(UpdateItemDocument, args),
  })

  useEffect(() => {
    if (data?.itemById) {
      form.reset({
        pricePerDay: Number(data.itemById.pricePerDay),
        capara: Number(data.itemById.capara),
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  console.log(typeof form.watch().pricePerDay)

  const submit = async (data: Item) => {
    if (!params.id) return
    try {
      await updateItemMutation.mutateAsync({
        id: params.id,
        input: { pricePerDay: data.pricePerDay.toString(), capara: data.capara.toString() },
      })

      const key = queryItemKeys.itemById({ input: { itemId: params.id } })
      queryClient.resetQueries({ queryKey: key })
      router.back()
    } catch {
      //
    }
  }

  return (
    <FormProvider {...form}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" keyboardDismissMode="on-drag">
        <View className="gap-md p-screen">
          <FormCurrencyInput<UpdateItemInput> name="pricePerDay" label="Cijena po danu" />
          <FormCurrencyInput<UpdateItemInput> name="capara" label="Kapara" />
          <FormSelect />
        </View>
      </ScrollView>
      <View className="gap-sm p-screen">
        <Button
          disabled={!form.formState.isDirty}
          loading={updateItemMutation.isPending}
          title="Spremi"
          onPress={form.handleSubmit(submit)}
        />
        <Button title="Ponisti" variant="secondary" onPress={() => router.back()} />
      </View>
      <SafeAreaView />
    </FormProvider>
  )
}
