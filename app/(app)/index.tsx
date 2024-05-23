import { CategoryInfoCard } from "@/features/categories/cards/category-info-card"
import { useParentCategoriesQuery } from "@/gql/hooks/categories"

import { InfoCardBuilder } from "@/components/ui/cards/info-card-builder"
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

  return (
    <InfoCardBuilder
      isLoading={isLoading}
      data={data?.parentCategories}
      renderItem={(c) => (c.item ? <CategoryInfoCard key={c.item.id} category={c.item} /> : null)}
    />
  )
}
