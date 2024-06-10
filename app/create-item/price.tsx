import { CreateItemForm } from "@/features/listings/types"
import { router } from "expo-router"
import { useFormContext } from "react-hook-form"
import { View } from "react-native"

import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { FormCurrencyInput } from "@/components/ui/form/form-input"
import { KeyboardAvoidingView } from "@/components/ui/keyboard-avoiding-view"
import { Small } from "@/components/ui/typography"

export default function PricePage() {
  const form = useFormContext<CreateItemForm>()
  const submit = async () => {
    const valid = await form.trigger(["pricePerDay"])
    if (valid) router.push(routes.createItemPreview)
  }
  return (
    <View className="flex-1 justify-between px-screen pt-lg">
      <View className="gap-md">
        <FormCurrencyInput<CreateItemForm>
          name="pricePerDay"
          label="Cijena po danu"
          placeholder="Unesi cijenu po danu"
        />
        <View>
          <Button variant="link" title="Dodaj cijenu" />
          <Small className="text-center text-muted-foreground">( Cijena po 3 dana, 7 dana,.. )</Small>
        </View>
      </View>
      <KeyboardAvoidingView>
        <Button title="Nastavi" onPress={submit} />
      </KeyboardAvoidingView>
    </View>
  )
}
