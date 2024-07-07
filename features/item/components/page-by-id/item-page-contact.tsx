import { ItemByIdQuery } from "@/gql/generated/graphql"
import * as Linking from "expo-linking"
import { View } from "react-native"

import { Button } from "@/components/ui/button"

type Props = ItemByIdQuery

export const ItemPageContact = ({ itemById }: Props) => {
  if (!itemById) return null
  const call = () => {
    Linking.openURL(itemById.user.contactNumber)
  }

  return (
    <View className="gap-sm">
      <Button onPress={call} title="Nazovi ogašivača" />
      <Button variant="secondary" title="Pošalji poruku" />
    </View>
  )
}
