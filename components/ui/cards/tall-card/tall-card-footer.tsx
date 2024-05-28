import React from "react"
import { View } from "react-native"

import { Small } from "../../typography"

export type TallCardFooterProps = {
  title: string
}

export default function TallCardFooter(props: TallCardFooterProps) {
  return (
    <View className="flex-1 justify-center pt-sm">
      <Small> {props.title} </Small>
    </View>
  )
}
