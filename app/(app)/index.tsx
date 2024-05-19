import { CategoryBaseCard } from "@/features/categories/cards/category-base-card"
import { useParentCategoriesQuery } from "@/gql/hooks/categories"

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

  const categories = parentCategories.map((c) => (c ? <CategoryBaseCard key={c.id} {...c} /> : null))

  return <ContentLayout title="Kategorije">{categories}</ContentLayout>
}
