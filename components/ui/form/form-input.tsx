import { Controller, Path, useFormContext } from "react-hook-form"
import { TextInputProps, View } from "react-native"
import CurrencyInput from "react-native-currency-input"

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

export const FormCurrencyInput = <C,>({ name, label }: FormInputProps<C>) => {
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View className="gap-sm">
          {label && <Label nativeID={label}>{label}</Label>}
          <CurrencyInput
            value={value}
            onChangeValue={(newValue) => {
              onChange(newValue ?? 0)
            }}
            onBlur={onBlur}
            minValue={0.0}
            precision={2}
            prefix="€ "
            renderTextInput={(props) => <Input {...props} />}
          />
          {error && <Text className="text-destructive">{error.message}</Text>}
        </View>
      )}
    />
  )
}

// <View className="gap-sm">
//   {label && <Label nativeID={label}>{label}</Label>}
//   <Input nativeID={label} {...inputProps} value={value ?? ""} onChangeText={onChange} onBlur={onBlur} />
//   {error && <Text className="text-destructive">{error.message}</Text>}
// </View>
