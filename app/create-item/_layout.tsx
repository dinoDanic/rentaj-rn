import { Stack } from "expo-router"
import { FormProvider, useForm } from "react-hook-form"

import { Header } from "@/components/ui/header"
import { SafeAreaView } from "@/components/ui/safe-area-view"

export default function CreateItemLayout() {
  const form = useForm()
  return (
    <FormProvider {...form}>
      <SafeAreaView />
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name={"index"} options={{ header: () => <Header title="Novi oglas" /> }} />
      </Stack>
    </FormProvider>
  )
}
