import React from "react"
import { Dimensions, View } from "react-native"

import { Large } from "../../typography"

export type HeroCardType = {
  id: number
  title: string
}

const windowWidth = Dimensions.get("window").width

export default function HeroCard(props: HeroCardType) {
  return (
    // eslint-disable-next-line prettier/prettier
    <View style={{ width: windowWidth }} className="h-[200] p-screen">
      <View className="flex-1 items-center justify-center rounded-xl bg-border">
        <Large className="text-muted-foreground">{props.title}</Large>
      </View>
    </View>
  )
}
