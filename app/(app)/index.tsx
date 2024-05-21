import { CategoryInfoCard } from "@/features/categories/cards/category-info-card"
import { useParentCategoriesQuery } from "@/gql/hooks/categories"
import { FlatList, View } from "react-native"

import { ContentLayout } from "@/components/ui/content-layout"
import { Text } from "@/components/ui/text"

export default function Index() {
  const query = useParentCategoriesQuery()

  if (query.isLoading) {
    return <Text>loading..</Text>
  }

  if (query.error) {
    return <Text>Something went wrong.. </Text>
  }

  if (!query.data?.parentCategories) {
    return <Text>No Categories</Text>
  }

  const { parentCategories } = query.data

  return (
    <ContentLayout title="Kategorije">
      <FlatList
        horizontal
        data={parentCategories}
        renderItem={(c) => (c.item ? <CategoryInfoCard {...c.item} /> : null)}
        ItemSeparatorComponent={() => <View className="w-2" />}
      />
    </ContentLayout>
  )
}
