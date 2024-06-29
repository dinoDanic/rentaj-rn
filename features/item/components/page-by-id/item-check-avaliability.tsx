import { ItemAvailability, ItemByIdQuery } from "@/gql/generated/graphql"
import { View } from "react-native"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ContentLayout } from "@/components/ui/content-layout"
import { H4, Small } from "@/components/ui/typography"

type Props = ItemByIdQuery

export const ItemCheckAvaliability = ({ itemById }: Props) => {
  if (!itemById) return null
  return (
    <ContentLayout title="Dostupnost 📅" description="Dostupnost sljedecih 7 dana" childrenClassName="gap-md">
      <View className="flex-row gap-sm">
        {itemById.availabilitySevenDays?.map((item, i) => {
          if (!item) return null
          return <DateItem key={item.date} isToday={i === 0} {...item} />
        })}
      </View>
      <Button title="Pogledaj ostale dane" variant="link" />
    </ContentLayout>
  )
}

type DateItemProps = (ItemAvailability | undefined) & { isToday: boolean }

const DateItem = (props: DateItemProps) => {
  if (!props) return null
  const date = new Date(props.date)
  const getDate = date.getDate()
  const day = getDate < 10 ? `0${getDate}` : getDate
  const getMonth = date.getMonth() + 1
  const month = getMonth < 10 ? `0${getMonth}` : getMonth
  return (
    <View
      className={cn(
        "flex-1 items-center justify-center rounded-xl border border-transparent bg-secondary py-sm opacity-50",
        props.available && "border-primary opacity-100",
        props.isToday && ""
      )}
    >
      <H4 className={cn("text-primary")}>{day}</H4>
      <Small className={cn("text-primary")}>{month}</Small>
    </View>
  )
}
