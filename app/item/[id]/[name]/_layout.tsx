import React from "react"
import { useMe } from "@/features/auth/hooks/use-me"
import { useItemByIdQuery } from "@/gql/hooks/items"
import { router, Stack, useLocalSearchParams } from "expo-router"

import { ICONS } from "@/lib/icons/icon-with-classname"
import { Button } from "@/components/ui/button"
import { useEditableView } from "@/components/ui/views/editable-view/use-editable-view"
import { FadeIn } from "@/components/animations/fade-in"

import { ItemSearchPageParams } from "."

export default function ItemByIdPLayout() {
  const params = useLocalSearchParams<ItemSearchPageParams>()
  const { toggleEditMode, isEditMode } = useEditableView()
  const { data } = useItemByIdQuery({ input: { itemId: params.id! } }, { enabled: Boolean(params.id) })
  const { me } = useMe()

  if (!me) throw Error("no me")

  const isOwner = me.id === data?.itemById?.user.id

  const title = isEditMode ? "Spremi" : "Uredi"

  const headerLeft = <Button onPress={router.back} variant="secondary" size="icon" icon={ICONS({}).xIcon} />

  const headerRight = isOwner && (
    <FadeIn>
      <Button onPress={toggleEditMode} title={title} size="sm" variant="secondary" />
    </FadeIn>
  )

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: params.name,
          headerLargeTitle: true,
          headerLeft: () => headerLeft,
          headerRight: () => headerRight,
          headerBackTitleVisible: true,
          headerShadowVisible: false,
          headerBlurEffect: "regular",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="edit-photos-modal"
        options={{
          presentation: "modal",
          headerLargeTitle: true,
          title: "Uredi Slike",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="edit-description-modal"
        options={{ presentation: "modal", headerLargeTitle: true, title: "Uredi Opis", headerShadowVisible: false }}
      />
    </Stack>
  )
}
