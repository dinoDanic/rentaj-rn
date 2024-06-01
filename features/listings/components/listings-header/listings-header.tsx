import { router } from "expo-router"

import { iconSizes } from "@/lib/icon-sizes"
import { PlusIcon } from "@/lib/icons/icon-with-classname"
import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/ui/header"

import { ListingsFilter } from "./listings-filter"

export const ListingsHeader = () => {
  return (
    <Header
      title="Moji Oglasi"
      hideBackButton
      className="px-0"
      actions={[
        <ListingsFilter />,
        <Button
          onPress={() => router.push(routes.createItem)}
          variant="secondary"
          size="icon"
          icon={<PlusIcon size={iconSizes.md} className="text-muted-foreground" />}
        />,
      ]}
    />
  )
}
