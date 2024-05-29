import SecureView from "@/features/auth/components/secure_view"

import { Text } from "@/components/ui/text"

import { ViewSwithcer } from "../components/view-switcher"

export const ProfilePage = () => {
  return (
    <>
      <SecureView>
        <Text>Profile</Text>
      </SecureView>
      <ViewSwithcer />
    </>
  )
}
