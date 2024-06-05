import { CreateItemForm, createItemFormShema } from "@/features/listings/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { router, Stack } from "expo-router"
import { FormProvider, useForm } from "react-hook-form"

import { ICONS } from "@/lib/icons/icon-with-classname"
import { Button } from "@/components/ui/button"
import { SafeAreaView } from "@/components/ui/safe-area-view"
import { Small } from "@/components/ui/typography"

export default function CreateItemLayout() {
  const form = useForm<CreateItemForm>({ resolver: zodResolver(createItemFormShema) })
  return (
    <>
      <FormProvider {...form}>
        <Stack screenOptions={{ headerShown: true }}>
          <Stack.Screen
            name="index"
            options={{
              headerTitle: "Kategorije",
              headerRight: () => <StepCounter step={1} />,
              headerLeft: () => <Button onPress={router.back} size="icon" variant="secondary" icon={ICONS({}).xIcon} />,
            }}
          />
          <Stack.Screen
            name={"step-two"}
            options={{
              headerTitle: "Informacije",
              headerRight: () => <StepCounter step={2} />,
            }}
          />
        </Stack>
      </FormProvider>
      <SafeAreaView />
    </>
  )
}

const StepCounter = (props: { step: number }) => <Small className="text-muted-foreground">Korak {props.step}/4</Small>

// headerLeft: () => <ButtonIcon onPress={router.back} icon={ICONS({}).chevronLeft} />,
