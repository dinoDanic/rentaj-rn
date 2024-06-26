import { FC } from "react"
import { Image } from "expo-image"
import { StyleSheet, View } from "react-native"

import { ImageIcon } from "@/lib/icons/icon-with-classname"
import { cn } from "@/lib/utils"

import { Small } from "../../typography"
import { BaseCard } from "../base-card"

export type InfoCardProps = {
  title: string
  source?: string | null
  className?: string
}

export const infoCardConst = {
  height: {
    image: "h-[110]",
    content: "h-[40]",
    total: "h-[150]",
  },
  width: {
    total: "w-[120]",
  },
}

type Props = InfoCardProps

export const InfoCard: FC<Props> = (props) => {
  const haveImage: boolean = props.source !== null

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj["

  const withImage = (
    <Image style={styles.image} source={props.source} placeholder={{ blurhash }} contentFit="cover" transition={300} />
  )

  const withoutImage = (
    <View className="flex-1 items-center justify-center">
      <ImageIcon className="text-muted-foreground/50" />
    </View>
  )

  const image = haveImage ? withImage : withoutImage

  return (
    <BaseCard className={cn(infoCardConst.width.total, infoCardConst.height.total, "p-0", props.className)}>
      <View className={cn(infoCardConst.height.image, infoCardConst.width.total)}>{image}</View>
      <View className="h-full bg-muted px-sm py-md">
        <Small numberOfLines={1} ellipsizeMode="tail">
          {props.title}
        </Small>
      </View>
    </BaseCard>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
})
