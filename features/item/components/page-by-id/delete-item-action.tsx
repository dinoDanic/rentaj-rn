import { useMe } from "@/features/auth/hooks/use-me"
import { DeleteItemDocument } from "@/gql/generated/graphql"
import { queryItemKeys } from "@/gql/hooks/items"
import { _client } from "@/lib"
import { useMutation } from "@tanstack/react-query"
import { router } from "expo-router"
import { Alert } from "react-native"

import { firebase } from "@/lib/firebase/helpers"
import { queryClient } from "@/lib/react-query/query-client"
import { Button } from "@/components/ui/button"
import { useEditableView } from "@/components/ui/views/editable-view/use-editable-view"

export const DeleteItemAction = ({ id }: { id: string }) => {
  const { me } = useMe()
  const deleteMutation = useMutation({ mutationFn: (id: string) => _client.request(DeleteItemDocument, { id }) })
  const deleteImagesMutation = useMutation({
    mutationFn: (location: string) => firebase.deleteFolder(location),
  })
  const { toggleEditMode } = useEditableView()

  const deleteItem = async () => {
    const location = `${me?.id}/${id}/`
    await deleteImagesMutation.mutateAsync(location)

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

  const isPending = deleteMutation.isPending || deleteImagesMutation.isPending

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
    ])
  }
  return <Button onPress={alert} title="Izbrisi Oglas" variant="destructive" loading={isPending} />
}
