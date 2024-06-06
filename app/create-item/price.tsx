import { CreateItemForm } from "@/features/listings/types"
import { router } from "expo-router"
import { useFormContext } from "react-hook-form"
import { View } from "react-native"

import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { FormCurrencyInput } from "@/components/ui/form/form-input"

export default function PricePage() {
  const form = useFormContext<CreateItemForm>()
  const submit = async () => {
    const valid = await form.trigger(["pricePerDay"])
    if (valid) router.push(routes.createItemReview)
  }
  return (
    <View className="flex-1 justify-between px-screen pt-lg">
      <View className="gap-md">
        <FormCurrencyInput<CreateItemForm>
          name="pricePerDay"
          label="Cijena po danu"
          placeholder="Unesi cijenu po danu"
        />
        <Button variant="link" title="Dodaj cijenu" />
      </View>
      <View>
        <Button title="Nastavi" onPress={submit} />
      </View>
    </View>
  )
}
