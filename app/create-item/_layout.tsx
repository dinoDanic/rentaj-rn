import { CreateItemForm, createItemFormShema } from "@/features/listings/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { Stack } from "expo-router"
import { FormProvider, useForm } from "react-hook-form"

import { Header } from "@/components/ui/header"
import { SafeAreaView } from "@/components/ui/safe-area-view"
import { Small } from "@/components/ui/typography"

export default function CreateItemLayout() {
  const form = useForm<CreateItemForm>({ resolver: zodResolver(createItemFormShema) })
  return (
    <>
      <SafeAreaView />
      <FormProvider {...form}>
        <Stack screenOptions={{ headerShown: true }}>
          <Stack.Screen
            name={"index"}
            options={{
              header: () => <Header title="Novi oglas" actions={[<StepCounter step={1} />]} />,
            }}
          />
          <Stack.Screen
            name={"step-two"}
            options={{
              header: () => <Header title="Informacije" actions={[<StepCounter step={2} />]} />,
            }}
          />
        </Stack>
      </FormProvider>
      <SafeAreaView />
    </>
  )
}

const StepCounter = (props: { step: number }) => <Small className="text-muted-foreground">Korak {props.step}/4</Small>
