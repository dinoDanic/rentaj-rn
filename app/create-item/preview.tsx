import { useMe } from "@/features/auth/hooks/use-me"
import { CreateItemForm } from "@/features/listings/types"
import { AddImageToItemDocument, CreateItemDocument, CreateItemMutationVariables } from "@/gql/generated/graphql"
import { _client } from "@/lib"
import { useMutation } from "@tanstack/react-query"
import { Image } from "expo-image"
import { ImagePickerAsset } from "expo-image-picker"
import { Link, router } from "expo-router"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { useFormContext } from "react-hook-form"
import { View } from "react-native"

import { storage } from "@/lib/firebase"
import { setFirebaseRef } from "@/lib/firebase/use-list-images"
import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { BaseCard } from "@/components/ui/cards/base-card"
import { Text } from "@/components/ui/text"
import { H2, Small } from "@/components/ui/typography"

type UploadMutationArgs = {
  images: ImagePickerAsset[]
  productId: string
}

export default function PreviewPage() {
  const { me } = useMe()
  const form = useFormContext<CreateItemForm>()
  const formData = form.getValues()

  const createItemMutation = useMutation({
    mutationFn: (args: CreateItemMutationVariables) => _client.request(CreateItemDocument, args),
  })

  const uploadImagesMutation = useMutation({
    mutationFn: (args: UploadMutationArgs) => uploadImages(args),
  })

  const uploadImages = async ({ images, productId }: UploadMutationArgs) => {
    await Promise.all(images.map((image) => uploadImage(image, productId)))
  }

  const uploadImage = async (image: ImagePickerAsset, productId: string) => {
    if (!image || !image.uri) {
      return
    }

    try {
      const response = await fetch(image.uri)
      if (!response.ok) {
        return
      }

      const blob = await response.blob()
      if (!productId || !image.fileName || !me?.id) return

      const fileStorage = setFirebaseRef.productImage({
        productId: productId,
        fileName: image.fileName,
        userId: me.id,
      })

      const storageRef = ref(storage, fileStorage)

      const res = await uploadBytesResumable(storageRef, blob)
      const url = await getDownloadURL(ref(storage, res.ref.fullPath))
      await _client.request(AddImageToItemDocument, { input: { name: res.ref.name, itemId: productId, imageUrl: url } })
    } catch {
      //
    }
  }

  const create = async (data: CreateItemForm) => {
    const images = form.getValues("images")

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
        await uploadImagesMutation.mutateAsync({ images, productId: res.createItem.id })
      }
      if (res.createItem?.id) {
        router.push(routes.createItemSuccess)
      }
    } catch {
      //
    }
  }

  const isMutating = uploadImagesMutation.isPending || createItemMutation.isPending

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
      <Button loading={isMutating} title="Kreiraj" onPress={form.handleSubmit(create)} />
    </View>
  )
}
