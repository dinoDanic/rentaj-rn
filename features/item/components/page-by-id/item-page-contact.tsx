import { useMe } from "@/features/auth/hooks/use-me"
import { ItemByIdQuery } from "@/gql/generated/graphql"
import * as Linking from "expo-linking"
import { View } from "react-native"

import { Button } from "@/components/ui/button"

type Props = ItemByIdQuery

export const ItemPageContact = ({ itemById }: Props) => {
  const { me } = useMe()

  if (!itemById) return null

  const isOwner = me?.id === itemById?.user.id

  const call = () => {
    Linking.openURL(itemById.user.contactNumber)
  }

  if (isOwner) {
    return <Button title="Izmjeni oglas" />
  }

  return (
    <View className="gap-sm">
      <Button onPress={call} title="Nazovi ogašivača" />
      <Button variant="secondary" title="Pošalji poruku" />
    </View>
  )
}
