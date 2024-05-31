import React from "react"
import { MyListingsQueryVariables } from "@/gql/generated/graphql"

import { iconSizes } from "@/lib/icon-sizes"
import { SlidersVerticalIcon } from "@/lib/icons/icon-with-classname"
import { BaseCard } from "@/components/ui/cards/base-card"
import { FormSwitch } from "@/components/ui/form/form-switch"
import { Modal } from "@/components/ui/modal"

export const ListingsFilter = () => {
  return (
    <Modal icon={<SlidersVerticalIcon className="text-muted-foreground" size={iconSizes.md} />}>
      <BaseCard>
        <FormSwitch<MyListingsQueryVariables>
          label="Prikaži samo aktivne"
          name="input.active"
          className="w-full justify-between"
        />
      </BaseCard>
    </Modal>
  )
}
