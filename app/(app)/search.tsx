import { RenderSearchResults } from "@/features/search/serach-results/render-search-results"
import { ScrollView } from "react-native"

export default function Search() {
  return (
    <ScrollView className="pt-lg">
      <RenderSearchResults />
    </ScrollView>
  )
}
