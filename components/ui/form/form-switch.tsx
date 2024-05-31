import { Controller, Path, useFormContext } from "react-hook-form"
import { View } from "react-native"

import { cn } from "@/lib/utils"

import { Label } from "../label"
import { Switch } from "../switch"

type FormInputProps<C> = {
  name: Path<C>
  placeholder?: string
  className?: string
  label: string
  onCheckedChange?: (a: boolean) => void
}

export const FormSwitch = <C,>({ name, className, label, onCheckedChange }: FormInputProps<C>) => {
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => {
        console.log("control value", value)

        return (
          <View className={cn("flex-row items-center gap-md", className)}>
            <Label nativeID={`${name}`}>{label}</Label>
            <Switch
              onBlur={onBlur}
              checked={value}
              onCheckedChange={(a) => {
                onChange(a)
                onCheckedChange && onCheckedChange(a)
              }}
              nativeID={`${name}`}
            />
          </View>
        )
      }}
    />
  )
}

// <View className="gap-md">
//   <Input {...inputProps} value={value ?? ""} onChangeText={onChange} onBlur={onBlur} />
//   {error && <Text className="text-destructive">{error.message}</Text>}
// </View>
