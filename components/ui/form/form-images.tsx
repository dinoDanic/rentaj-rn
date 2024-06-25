import { Image } from "expo-image"
import * as ImagePicker from "expo-image-picker"
import { Controller, Path, useFormContext } from "react-hook-form"
import { Pressable, ScrollView, StyleSheet, View } from "react-native"

import { ImagesIcon, PlusIcon, XIcon } from "@/lib/icons/icon-with-classname"
import { iconSizes } from "@/lib/sizes"
import { FadeIn } from "@/components/animations/fade-in"

import { Button } from "../button"
import { BaseCard } from "../cards/base-card"
import { Label } from "../label"
import { Text } from "../text"
import { Small } from "../typography"

type FormInputProps<C> = {
  name: Path<C>
  placeholder?: string
  label?: string
}

export const FormImages = <C extends Record<string, any>>({ name, label }: FormInputProps<C>) => {
  const { control, setValue, getValues } = useFormContext<C>()

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
      const assets = result.assets as ImagePicker.ImagePickerAsset[]
      //@ts-ignore
      setValue(name, assets)
    }
  }

  const removeImage = (uri: string) => {
    const images = getValues(name) as ImagePicker.ImagePickerAsset[] | null
    setValue(
      name,
      //@ts-ignore
      images?.filter((image) => image.uri !== uri)
    )
  }
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value }, fieldState: { error } }) => {
        const images = value as ImagePicker.ImagePickerAsset[] | null
        const haveImages = Boolean(images?.length)

        const withoutImages = (
          <FadeIn>
            <Pressable onPress={() => pickImage()}>
              <BaseCard className="items-center gap-sm py-xl">
                <ImagesIcon className="text-primary" />
                <Text className="font-semibold">Prenesite svoju fotografije</Text>
                <Small className="max-w-[240] text-center text-muted-foreground">
                  Samo dodirnite ovdje da pregledate svoju <Small className="font-bold text-primary">galeriju</Small> i
                  prenesete fotografije.
                </Small>
              </BaseCard>
            </Pressable>
          </FadeIn>
        )

        const withImages = (
          <FadeIn>
            <BaseCard>
              <ScrollView horizontal>
                {images?.map((image) => {
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

                <Pressable onPress={() => pickImage()}>
                  <BaseCard className="mt-[10] h-[100] w-[100] items-center justify-center bg-muted">
                    <Button
                      onPress={() => pickImage()}
                      size="icon"
                      variant="outline"
                      icon={<PlusIcon className="text-muted-foreground" />}
                    />
                  </BaseCard>
                </Pressable>
              </ScrollView>
            </BaseCard>
          </FadeIn>
        )

        const content = haveImages ? withImages : withoutImages

        return (
          <View className="gap-sm">
            {label && <Label nativeID={label}>{label}</Label>}
            {content}
            {error && <Text className="text-destructive">{error.message}</Text>}
          </View>
        )
      }}
    />
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
