import { _client } from "@/lib"

import { Button } from "@/components/ui/button"

import { useMe } from "../hooks/use-me"

export const LogoutAction = () => {
  const { setMe } = useMe()

  const logout = () => {
    _client.setHeader("Authorization", "")
    setMe(null)
  }

  return <Button title="logout" onPress={() => logout()} />
}
