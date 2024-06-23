import { Stack } from "expo-router"
import { FormProvider, useForm } from "react-hook-form"

export type SearchPageForm = {
  query: string
}

export default function SearchLayout() {
  const form = useForm<SearchPageForm>({ defaultValues: { query: "" } })
  return (
    <FormProvider {...form}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerSearchBarOptions: {
              placeholder: "Pretraži oglase",
              onChangeText: (text) => {
                form.setValue("query", text.nativeEvent.text)
              },
            },
            headerLargeTitle: true,

            title: "Pretraži",
            headerBlurEffect: "regular",
            headerTransparent: true,
          }}
        />
      </Stack>
    </FormProvider>
  )
}
