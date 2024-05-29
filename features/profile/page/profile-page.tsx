import SecureView from "@/features/auth/components/secure_view"

import { ViewSwithcer } from "../components/view-switcher"

export const ProfilePage = () => {
  return (
    <>
      <SecureView>
        <ViewSwithcer />
      </SecureView>
    </>
  )
}
