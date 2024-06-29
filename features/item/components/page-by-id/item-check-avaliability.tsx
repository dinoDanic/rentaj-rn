import { ItemAvailability, ItemByIdQuery } from "@/gql/generated/graphql"
import { View } from "react-native"

import { cn } from "@/lib/utils"
import { ContentLayout } from "@/components/ui/content-layout"
import { H4, Small } from "@/components/ui/typography"

type Props = ItemByIdQuery

export const ItemCheckAvaliability = ({ itemById }: Props) => {
  if (!itemById) return null
  return (
    <ContentLayout title="Dostupnost 📅">
      <View className="flex-row gap-sm">
        {itemById.availabilitySevenDays?.map((item) => {
          if (!item) return null
          return <DateItem {...item} />
        })}
      </View>
    </ContentLayout>
  )
}

const DateItem = (props: ItemAvailability | undefined) => {
  if (!props) return null
  const date = new Date(props.date)
  const getDate = date.getDate()
  const day = getDate < 10 ? `0${getDate}` : getDate
  const getMonth = date.getMonth() + 1
  const month = getMonth < 10 ? `0${getMonth}` : getMonth
  return (
    <View
      className={cn(
        "flex-1 items-center justify-center rounded-lg bg-secondary py-sm",
        props.available && "bg-primary"
      )}
    >
      <H4 className={cn("p-0", props.available && "text-primary-foreground")}>{day}</H4>
      <Small className={cn("p-0", props.available && "text-primary-foreground")}>{month}</Small>
    </View>
  )
}
