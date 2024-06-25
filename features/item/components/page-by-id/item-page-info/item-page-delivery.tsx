import { ItemByIdQuery } from "@/gql/generated/graphql"

import { AnnounceCard } from "@/components/ui/cards/announce-card"

type Props = ItemByIdQuery

export const ItemPageDelivery = ({ itemById }: Props) => {
  const delivery: boolean = itemById?.delivery || false
  const pickup: boolean = itemById?.pickUp || false
  const deliveryAndPickup: boolean = delivery && pickup

  const title = "Dostava 🚚"
  const messages = {
    withDelivery: "Vlasnik nudi dostavu za ovaj predmet. Možete dogovoriti dostavu i povrat predmeta.",
    withPickup: "Vlasnik ne nudi dostavu za ovaj predmet. Morate sami preuzeti i vratiti predmet.",
    withDeliveryAndPickup:
      "Vlasnik nudi dostavu i preuzimanje za ovaj predmet. Možete dogovoriti dostavu ili preuzimanje predmeta.",
  }

  let message = ""

  if (deliveryAndPickup) {
    message = messages.withDeliveryAndPickup
  } else if (delivery) {
    message = messages.withDelivery
  } else {
    message = messages.withPickup
  }

  return <AnnounceCard title={title} message={message} />
}
