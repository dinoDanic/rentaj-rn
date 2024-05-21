import { FC } from "react"
import { ImageIcon } from "lucide-react-native"
import { View } from "react-native"

import { Small } from "../typography"
import { BaseCard } from "./base-card"

export type InfoCardProps = {
  title: string
}

type Props = InfoCardProps

export const InfoCard: FC<Props> = ({ title }) => {
  return (
    <BaseCard className="p-0">
      <View className="h-10 items-center justify-center">
        <ImageIcon />
      </View>
      <View className="p-2">
        <Small>{title}</Small>
      </View>
    </BaseCard>
  )
}
