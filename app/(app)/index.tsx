import { RenderInfoCategories } from "@/features/categories/components/render-info-categories"
import RenderHeroFeature from "@/features/home/components/render-hero-feautred"
import { View } from "react-native"

export default function Index() {
  return (
    <View className="gap-3xl">
      <RenderHeroFeature />
      <RenderInfoCategories />
    </View>
  )
}
