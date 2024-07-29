import React from "react"
import { FilterItems } from "@/gql/generated/graphql"
import { FormProvider, useForm } from "react-hook-form"

import { SlidersVerticalIcon } from "@/lib/icons/icon-with-classname"
import { iconSizes } from "@/lib/sizes"
import { FormSwitch } from "@/components/ui/form/form-switch"
import { Modal } from "@/components/ui/modal"

import { useMyListings } from "../../store/use-my-listings"

export const ListingsFilter = () => {
  const form = useForm<FilterItems>({ defaultValues: { active: true } })
  const { setActive } = useMyListings()
  return (
    <Modal icon={<SlidersVerticalIcon className="text-muted-foreground" size={iconSizes.md} />}>
      <FormProvider {...form}>
        <FormSwitch<FilterItems>
          label="Prikaži samo aktivne"
          name="active"
          className="w-full justify-between"
          onCheckedChange={(state) => {
            setActive(state)
          }}
        />
      </FormProvider>
    </Modal>
  )
}
