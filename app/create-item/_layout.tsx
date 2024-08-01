import { CreateItemForm, createItemFormShema } from "@/features/listings/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { router, Stack } from "expo-router"
import { FormProvider, useForm } from "react-hook-form"

import { ICONS } from "@/lib/icons/icon-with-classname"
import { Button } from "@/components/ui/button"
import { SafeAreaView } from "@/components/ui/safe-area-view"
import { Small } from "@/components/ui/typography"

export default function CreateItemLayout() {
  const form = useForm<CreateItemForm>({
    resolver: zodResolver(createItemFormShema),
    defaultValues: { pricePerDay: 0.0 },
  })

  return (
    <>
      <FormProvider {...form}>
        <Stack screenOptions={{ headerShown: true }}>
          <Stack.Screen
            name="index"
            options={{
              headerTitle: "Novi oglas",
              headerRight: () => <StepCounter step={1} />,
              headerLeft: () => <Button onPress={router.back} size="icon" variant="secondary" icon={ICONS({}).xIcon} />,
            }}
          />
          <Stack.Screen
            name="[category-id]"
            options={{
              title: "",
              headerRight: () => <StepCounter step={1} />,
            }}
          />
          <Stack.Screen
            name="info"
            options={{
              headerTitle: "Informacije",
              headerRight: () => <StepCounter step={2} />,
            }}
          />
          <Stack.Screen
            name="price"
            options={{
              title: "Cijena",
              headerRight: () => <StepCounter step={4} />,
            }}
          />
          <Stack.Screen
            name="preview"
            options={{
              headerLargeTitle: true,
              headerShadowVisible: false,
              title: "Pregled",
            }}
          />
          <Stack.Screen
            name="success"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </FormProvider>
      <SafeAreaView />
    </>
  )
}

const StepCounter = (props: { step: number }) => <Small className="text-muted-foreground">Korak {props.step}/4</Small>
