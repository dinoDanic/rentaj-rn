import { View } from "react-native"

import { H3, Large } from "@/components/ui/typography"

export const HeaderText = () => {
  return (
    <View className="items-center gap-md">
      <Large className="font-bold">Rentaj</Large>
      <H3 className="max-w-[200] text-center font-extrabold">Iznajmi kaj got očeš kad got očeš</H3>
    </View>
  )
}
