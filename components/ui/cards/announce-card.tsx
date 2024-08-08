import { View } from "react-native"

import { ContentLayout } from "../content-layout"
import { Muted } from "../typography"

type Props = {
  title: string
  message: string
}

export const AnnounceCard = (props: Props) => {
  return (
    <ContentLayout title={props.title}>
      <View className="rounded-lg bg-muted p-md">
        <Muted>{props.message}</Muted>
      </View>
    </ContentLayout>
  )
}
