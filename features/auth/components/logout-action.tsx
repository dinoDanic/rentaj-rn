import { queryUserKeys } from "@/gql/hooks/user"
import { _client } from "@/lib"

import { queryClient } from "@/lib/react-query/query-client"
import { Button } from "@/components/ui/button"

export const LogoutAction = () => {
  const logout = () => {
    _client.setHeader("Authorization", "")
    queryClient.invalidateQueries({ queryKey: queryUserKeys.me })
  }
  return <Button title="logout" onPress={() => logout()} />
}
