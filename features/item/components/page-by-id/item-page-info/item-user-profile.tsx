import { ItemByIdQuery } from "@/gql/generated/graphql"

import { AvatarCard } from "@/components/ui/cards/avatar-card"
import { ContentLayout } from "@/components/ui/content-layout"

export const ItemUserProfile = ({ itemById }: ItemByIdQuery) => {
  if (!itemById) return null
  const { email, company, id } = itemById?.user || {}
  const haveCompany = Boolean(company?.name)
  const fallback = haveCompany ? company!.name : email
  const title = haveCompany ? company!.name : email
  const subtitle = haveCompany ? company!.id : id
  return (
    <ContentLayout title="Oglašivač">
      <AvatarCard href="/" title={title} subtitle={subtitle} fallback={fallback} />
    </ContentLayout>
  )
}
