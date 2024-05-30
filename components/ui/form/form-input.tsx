import { Controller, Path, useFormContext } from "react-hook-form"
import { TextInputProps, View } from "react-native"

import { Input } from "../input"
import { Text } from "../text"

type FormInputProps<C> = {
  name: Path<C>
  placeholder?: string
} & TextInputProps

export const FormInput = <C,>({ name, ...inputProps }: FormInputProps<C>) => {
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View className="gap-md">
          <Input {...inputProps} value={value ?? ""} onChangeText={onChange} onBlur={onBlur} />
          {error && <Text className="text-destructive">{error.message}</Text>}
        </View>
      )}
    />
  )
}
