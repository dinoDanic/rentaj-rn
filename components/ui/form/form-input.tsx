import { Controller, Path, useFormContext } from "react-hook-form"
import { TextInputProps, View } from "react-native"

import { Input } from "../input"
import { Label } from "../label"
import { Text } from "../text"

type FormInputProps<C> = {
  name: Path<C>
  placeholder?: string
  label?: string
} & TextInputProps

export const FormInput = <C,>({ name, label, ...inputProps }: FormInputProps<C>) => {
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View className="gap-sm">
          {label && <Label nativeID={label}>{label}</Label>}
          <Input nativeID={label} {...inputProps} value={value ?? ""} onChangeText={onChange} onBlur={onBlur} />
          {error && <Text className="text-destructive">{error.message}</Text>}
        </View>
      )}
    />
  )
}
