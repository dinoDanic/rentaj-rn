import { FC } from "react"
import { Image } from "expo-image"
import { StyleSheet, View } from "react-native"

import { ImageIcon } from "@/lib/icons/icon-with-classname"
import { cn } from "@/lib/utils"

import { Divider } from "../../divider"
import { Small } from "../../typography"
import { BaseCard } from "../base-card"
import TallCardFooter, { TallCardFooterProps } from "./tall-card-footer"

export type TallCardProps = {
  text1: string
  price: number
  source?: string | null
  className?: string
  footer: TallCardFooterProps
}

export const infoCardConst = {
  height: {
    image: "h-[80]",
  },
  width: {
    total: "w-[150]",
  },
}

type Props = TallCardProps

export const TallCard: FC<Props> = (props) => {
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
    <BaseCard className={cn("w-[140] flex-1 p-0", props.className)}>
      <View className={cn("h-[80]")}>{image}</View>
      <View className="flex-1 gap-sm bg-muted px-sm py-md">
        <Small className="font-bold text-primary" numberOfLines={1}>
          {props.price} €
        </Small>
        <Small className="min-h-[30] font-bold" numberOfLines={2} ellipsizeMode="tail">
          {props.text1}
        </Small>
        <Divider className="-ml-sm -mr-sm bg-muted-foreground/20" />
        <TallCardFooter {...props.footer} />
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
