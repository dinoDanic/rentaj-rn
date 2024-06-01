import { ChooseImages } from "@/features/listings/components/create-listing/choose-images"
import { CreateItemInput } from "@/gql/generated/graphql"
import { FormProvider, useForm } from "react-hook-form"

import { ContentLayout } from "@/components/ui/content-layout"

export default function CreateListingsModal() {
  const form = useForm<CreateItemInput>()

  return (
    <FormProvider {...form}>
      <ChooseImages />
    </FormProvider>
  )
}
