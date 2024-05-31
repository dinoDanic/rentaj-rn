import { iconSizes } from "@/lib/icon-sizes"
import { SlidersVerticalIcon } from "@/lib/icons/icon-with-classname"
import { Modal } from "@/components/ui/modal"
import { Text } from "@/components/ui/text"

export const ListingsFilter = () => {
  return (
    <Modal icon={<SlidersVerticalIcon className="text-muted-foreground" size={iconSizes.md} />}>
      <Text>KIta</Text>
    </Modal>
  )
}
