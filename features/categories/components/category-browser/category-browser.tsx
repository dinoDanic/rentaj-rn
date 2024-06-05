import { Link } from "expo-router"

import { routes } from "@/lib/routes"
import { Text } from "@/components/ui/text"

export const CategoryBrowser = () => {
  return (
    <Link href={`${routes.categoryBrowser}/kita-action/0`}>
      <Text>Odaberi kategoriju</Text>
    </Link>
  )
}
