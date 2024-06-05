import { CategoryByIdSearchParams } from "@/features/categories/types"
import { CreateItemForm } from "@/features/listings/types"
import { Category } from "@/gql/generated/graphql"
import { useCategoryById, useSelectParentCategoryQuery } from "@/gql/hooks/categories"
import { router, useLocalSearchParams } from "expo-router"
import { useFormContext } from "react-hook-form"

import { routes } from "@/lib/routes"
import { BaseListBuilder } from "@/components/ui/lists/base-list/base-list-builder"
import { BaseListItem } from "@/components/ui/lists/base-list/base-list-item"

export default function CategoryById() {
  const props = useLocalSearchParams<CategoryByIdSearchParams>()
  const categoryId = props["category-id"]
  const haveCategoryId: boolean = Boolean(categoryId !== "0" && categoryId?.length)

  const { data: categoryById } = useCategoryById({ input: { id: categoryId } }, { enabled: haveCategoryId })
  const { data: parentCategories } = useSelectParentCategoryQuery({}, { enabled: !haveCategoryId })

  if (haveCategoryId && categoryById?.categoryById?.childCategories) {
    return (
      <BaseListBuilder
        data={categoryById?.categoryById?.childCategories}
        renderItem={(i) => (i.item ? <RenderCategoryItem {...i.item} /> : null)}
      />
    )
  }

  if (!haveCategoryId && parentCategories?.parentCategories) {
    return (
      <BaseListBuilder
        data={parentCategories?.parentCategories}
        renderItem={(i) => (i.item ? <RenderCategoryItem {...i.item} /> : null)}
      />
    )
  }
}

const RenderCategoryItem = (category: Category) => {
  const form = useFormContext<CreateItemForm>()
  const haveChildren = Boolean(category?.childCategories?.length)
  const href = haveChildren ? `${routes.createItem}/${category.id}` : undefined
  return category ? (
    <BaseListItem
      onPress={() => {
        form.setValue("category", category)
        router.navigate(routes.createItem)
      }}
      name={category.name}
      href={href}
    />
  ) : null
}
