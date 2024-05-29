import React from "react"
import { SafeAreaView as RN_SafeAreaView } from "react-native"
import { SafeAreaViewProps } from "react-native-safe-area-context"

export const SafeAreaView = (props: SafeAreaViewProps) => {
  return <RN_SafeAreaView className="mb-sm" edges={["top", "left", "right"]} {...props} />
}
