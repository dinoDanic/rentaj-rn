import { useState } from "react"
import { Image } from "expo-image"
import * as ImagePicker from "expo-image-picker"
import { ScrollView, StyleSheet, View } from "react-native"

import { PlusIcon, XIcon } from "@/lib/icons/icon-with-classname"
import { iconSizes } from "@/lib/sizes"
import { Button } from "@/components/ui/button"
import { ContentLayout } from "@/components/ui/content-layout"

export const ChooseImages = () => {
  const [images, setImages] = useState<ImagePicker.ImagePickerAsset[]>([])
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
      selectionLimit: 6,
      allowsMultipleSelection: true,
    })

    if (!result.canceled) {
      setImages([...images, ...result.assets])
    }
  }

  const removeImage = (uri: string) => {
    setImages(images.filter((image) => image.uri !== uri))
  }
  return (
    <ContentLayout
      title="Slike"
      className="mt-lg"
      action={
        <Button
          variant="secondary"
          size="icon"
          icon={<PlusIcon className="text-foreground" size={iconSizes.md} />}
          onPress={pickImage}
        />
      }
    >
      <View className="gap-lg">
        <ScrollView horizontal className="-ml-screen -mr-screen  gap-sm px-screen">
          {images.map((image) => {
            return (
              <View key={image.uri} className="py-3">
                <Image source={{ uri: image.uri }} style={styles.image} />
                <Button
                  size="iconSm"
                  variant="secondary"
                  icon={<XIcon className="text-foreground" size={iconSizes.sm} />}
                  className="absolute right-xs"
                  onPress={() => removeImage(image.uri)}
                />
              </View>
            )
          })}
        </ScrollView>
      </View>
    </ContentLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 12,
  },
})
