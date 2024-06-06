import { CategoryByIdSearchParams } from "@/features/categories/types"
import { CreateItemForm } from "@/features/listings/types"
import { Category } from "@/gql/generated/graphql"
import { useCategoryById, useSelectParentCategoryQuery } from "@/gql/hooks/categories"
import { router, Stack, useLocalSearchParams } from "expo-router"
import { useFormContext } from "react-hook-form"
import { ActivityIndicator, View } from "react-native"

import { routes } from "@/lib/routes"
import { BaseListBuilder } from "@/components/ui/lists/base-list/base-list-builder"
import { BaseListItem } from "@/components/ui/lists/base-list/base-list-item"

export default function CategoryById() {
  const props = useLocalSearchParams<CategoryByIdSearchParams>()

  const categoryId = props["category-id"]
  const haveCategoryId: boolean = Boolean(categoryId !== "0" && categoryId?.length)

  const { isLoading: isLoadingById, data: categoryById } = useCategoryById(
    { input: { id: categoryId } },
    { enabled: haveCategoryId }
  )
  const { data: parentCategories, isLoading: isLoadingParent } = useSelectParentCategoryQuery(
    {},
    { enabled: !haveCategoryId }
  )

  if (haveCategoryId) {
    if (isLoadingById) {
      return <Loader />
    } else if (categoryById?.categoryById?.childCategories) {
      return (
        <>
          <Stack.Screen options={{ title: categoryById.categoryById.name }} />
          <BaseListBuilder
            data={categoryById?.categoryById?.childCategories}
            renderItem={(i) => (i.item ? <RenderCategoryItem {...i.item} /> : null)}
          />
        </>
      )
    }
  }

  if (!haveCategoryId) {
    if (isLoadingParent) {
      return <Loader />
    } else if (parentCategories?.parentCategories) {
      return (
        <>
          <Stack.Screen options={{ title: "Glavne kategorije" }} />
          <BaseListBuilder
            data={parentCategories?.parentCategories}
            renderItem={(i) => (i.item ? <RenderCategoryItem {...i.item} /> : null)}
          />
        </>
      )
    }
  }
}

const RenderCategoryItem = (category: Category) => {
  const haveChildren = Boolean(category?.childCategories?.length)
  const href = haveChildren ? `${routes.createItem}/${category.id}` : undefined
  const form = useFormContext<CreateItemForm>()

  return category ? (
    <BaseListItem
      onPress={() => {
        if (href) {
          router.push(href)
        } else {
          form.setValue("category", category)
          router.navigate(routes.createItem)
        }
      }}
      name={category.name}
      arrow={haveChildren}
    />
  ) : null
}

const Loader = () => (
  <View className="flex-1 items-center justify-center">
    <ActivityIndicator />
  </View>
)
