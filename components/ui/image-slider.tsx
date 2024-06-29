import React, { useEffect, useRef, useState } from "react"
import { Image } from "expo-image"
import { Animated, Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView, View } from "react-native"

import { spacingSizes } from "@/lib/sizes"
import { cn } from "@/lib/utils"

type Props = {
  images: string[]
  className?: string
}
export const ImageSlider = ({ images }: Props) => {
  const [active, setActive] = useState(0)
  const { width: windowWidth } = Dimensions.get("window")

  const width = windowWidth - spacingSizes.screen * 2
  const height = 300

  const change = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.floor(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
    const threshold = 0.5 * nativeEvent.layoutMeasurement.width
    const offset = nativeEvent.contentOffset.x - slide * nativeEvent.layoutMeasurement.width

    if (offset >= threshold && slide + 1 !== active) {
      setActive(slide + 1)
    } else if (offset < threshold && slide !== active) {
      setActive(slide)
    }
  }
  const animatedValues = useRef(images.map(() => new Animated.Value(7))).current

  useEffect(() => {
    animatedValues.forEach((animatedValue, index) => {
      Animated.timing(animatedValue, {
        toValue: index === active ? 30 : 7,
        duration: 300,
        useNativeDriver: false,
      }).start()
    })
  }, [active])

  return (
    <View className={"h-[300px] overflow-hidden rounded-lg"}>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={change}
        showsHorizontalScrollIndicator={false}
        style={{ width, height }}
      >
        {images.map((image, index) => {
          return <Image style={{ width, height }} contentFit="cover" key={index} source={{ uri: image }} />
        })}
      </ScrollView>
      <View className="absolute bottom-md flex flex-row gap-sm self-center">
        {images.map((_i, k) => {
          return (
            <Animated.View
              key={k}
              className={cn("h-[7px] w-[7px] rounded-md", k === active ? "bg-primary" : "bg-white")}
              style={{ width: animatedValues[k] }}
            />
          )
        })}
      </View>
    </View>
  )
}
