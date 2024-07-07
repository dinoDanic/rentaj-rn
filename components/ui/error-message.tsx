import React from "react"
import { Text, View } from "react-native"

type Props = {
  message?: string
}
export const ErrorMessage = ({ message }: Props) => {
  return (
    <View className="flex flex-row gap-sm rounded-md bg-destructive/20 px-md py-sm">
      <Text className="text-destructive">{message ? message : "Something Went Wrong"}</Text>
    </View>
  )
}
