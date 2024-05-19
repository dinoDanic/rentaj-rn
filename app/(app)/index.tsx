import { CategoriesDocument } from "@/gql/generated/graphql"
import { _client } from "@/lib"
import { useQuery } from "@tanstack/react-query"

import { Text } from "@/components/ui/text"

export default function Index() {
  const query = useQuery({
    queryKey: ["categories"],
    queryFn: () => _client.request(CategoriesDocument),
  })

  if (query.isLoading) {
    return <Text>loading..</Text>
  }

  if (query.error) {
    return <Text>Something went wrong..</Text>
  }

  return query.data?.categories?.map((category) => {
    return <Text key={category?.id}>{category?.name}</Text>
  })
}
