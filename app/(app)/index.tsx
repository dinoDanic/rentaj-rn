import { CategoryInfoCard } from "@/features/categories/cards/category-info-card"
import { useParentCategoriesQuery } from "@/gql/hooks/categories"
import { FlatList, View } from "react-native"

import { ContentLayout } from "@/components/ui/content-layout"
import { Text } from "@/components/ui/text"

export default function Index() {
  return (
    <ContentLayout title="Kategorije" childrenClassName="-mr-3 -ml-3">
      <RenderContent />
    </ContentLayout>
  )
}

const RenderContent = () => {
  const { isLoading, data, error } = useParentCategoriesQuery()

  if (error) {
    return <Text>{error.name}</Text>
  }

  const { parentCategories } = data || {}

  if (isLoading) {
    return <Text>Loading..</Text>
  }
  return (
    <FlatList
      horizontal
      data={parentCategories}
      renderItem={(c) => {
        const maxWidth = "max-w-[120]"
        const cardClass = c.index !== 0 ? maxWidth : `${maxWidth} ml-3`
        if (c.item) {
          return <CategoryInfoCard category={c.item} className={cardClass} />
        }
        return null
      }}
      ItemSeparatorComponent={() => <View className="w-2" />}
      showsHorizontalScrollIndicator={false}
    />
  )
}
