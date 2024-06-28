import { ItemByIdQuery } from "@/gql/generated/graphql"
import { View } from "react-native"
import MapView, { Marker } from "react-native-maps"

import { borderRadius } from "@/lib/sizes"
import { ContentLayout } from "@/components/ui/content-layout"
import { InfoAnswer } from "@/components/ui/info-answer"

type Props = ItemByIdQuery

export const ItemPageLocation = ({ itemById }: Props) => {
  const lat = Number(itemById?.location.lat)
  const long = Number(itemById?.location.long)
  if (!itemById) return null
  return (
    <ContentLayout title="Lokacija 📍" childrenClassName="gap-md">
      <View className="h-[200] w-full">
        <MapView
          initialRegion={{
            latitude: lat,
            longitude: long,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{ width: "100%", height: "100%", borderRadius: borderRadius.md }}
        >
          <Marker coordinate={{ latitude: lat, longitude: long }} title={"marker"} description={"desc"} />
        </MapView>
      </View>
      <View className="gap-sm">
        <InfoAnswer info="Grad" answer={itemById.location.city} />
        <InfoAnswer info="Adresa" answer={itemById.location.address} />
      </View>
    </ContentLayout>
  )
}
