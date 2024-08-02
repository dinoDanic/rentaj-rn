import { ItemByIdQuery } from "@/gql/generated/graphql"
import * as Linking from "expo-linking"
// import { router } from "expo-router"
import { View } from "react-native"

// import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"

type Props = ItemByIdQuery

export const ItemPageContact = ({ itemById }: Props) => {
  if (!itemById) return null
  const call = () => {
    Linking.openURL(itemById.user.contactNumber)
  }

  // const createOrder = () => {
  //   router.push({ pathname: routes.order.new.index, params: { id: itemById.id } })
  // }

  return (
    <View className="gap-sm">
      {/* <Button onPress={createOrder} title="Rentaj" /> */}
      <Button onPress={call} title="Nazovi ogašivača" />
      <Button variant="secondary" title="Pošalji poruku" />
    </View>
  )
}
