import { DeleteItemDocument } from "@/gql/generated/graphql"
import { queryItemKeys } from "@/gql/hooks/items"
import { _client } from "@/lib"
import { useMutation } from "@tanstack/react-query"
import { router } from "expo-router"
import { Alert } from "react-native"

import { queryClient } from "@/lib/react-query/query-client"
import { Button } from "@/components/ui/button"
import { useEditableView } from "@/components/ui/views/editable-view/use-editable-view"

export const DeleteItemAction = ({ id }: { id: string }) => {
  const deleteMutation = useMutation({ mutationFn: (id: string) => _client.request(DeleteItemDocument, { id }) })
  const { toggleEditMode } = useEditableView()

  const deleteItem = async () => {
    const res = await deleteMutation.mutateAsync(id)
    if (res.deleteItem) {
      queryClient.refetchQueries({ queryKey: queryItemKeys.myListingsAll })
      Alert.alert("Oglas izbrisan", undefined, [
        {
          text: "OK",
          onPress: () => {
            router.back()
            toggleEditMode()
          },
        },
      ])
    }
  }

  const alert = () => {
    Alert.alert("Izbriši oglas", "Dali ste sigurni da želite izbrisati ovaj oglas?", [
      {
        text: "Izbriši",
        onPress: () => deleteItem(),
        style: "destructive",
      },
      {
        text: "Otkaži",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      // { text: "OK", onPress: () => console.log("OK Pressed") },
    ])
  }
  return <Button onPress={alert} title="Izbrisi Oglas" variant="destructive" />
}
