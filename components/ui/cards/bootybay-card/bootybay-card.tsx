import { Image } from "expo-image"
import { StyleSheet, View } from "react-native"

import { Divider } from "../../divider"
import { Text } from "../../text"
import { Small } from "../../typography"

type BootyBayCardProps = {
  source?: string
  title: string
  description?: string
}

export const BootyBayCard = (props: BootyBayCardProps) => {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj["

  return (
    <View>
      <View className="flex-row gap-md px-screen">
        <Image
          style={styles.image}
          source={props.source}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={300}
        />
        <View className="flex-1 justify-between">
          <Text>{props.title}</Text>
          {props.description && <Small className="text-muted-foreground">{props.description}</Small>}
        </View>
      </View>
      <Divider className="mt-md" />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    maxWidth: 40,
    height: 40,
    backgroundColor: "#0553",
    borderRadius: 8,
  },
})
