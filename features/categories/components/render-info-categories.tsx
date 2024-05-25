import { useParentCategoriesQuery } from "@/gql/hooks/categories"

import { InfoCardBuilder } from "@/components/ui/cards/info-card/info-card-builder"
import { ContentLayout } from "@/components/ui/content-layout"
import { Text } from "@/components/ui/text"

import { CategoryInfoCard } from "../cards/category-info-card"

export const RenderInfoCategories = () => {
  return (
    <ContentLayout title="Kategorije">
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
