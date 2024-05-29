import { router } from "expo-router"

import { Button } from "@/components/ui/button"

export const Footer = () => {
  return (
    <Button
      variant="link"
      title="Nastavi kao gost"
      className="w-full"
      onPress={() => {
        router.push("../")
      }}
    />
  )
}
