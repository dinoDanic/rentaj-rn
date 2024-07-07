import { Controller, Path, useFormContext } from "react-hook-form"
import { TextInputProps, View } from "react-native"

import { ErrorMessage } from "../error-message"
import { Label } from "../label"
import { Textarea } from "../textarea"

type FormInputProps<C> = {
  name: Path<C>
  placeholder?: string
  label?: string
} & TextInputProps

export const FormTextArea = <C,>({ name, label, ...inputProps }: FormInputProps<C>) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View className="gap-sm">
          {label && (
            <Label nativeID={label} className="font-semibold text-gray-900">
              {label}
            </Label>
          )}
          <Textarea nativeID={label} value={value ?? ""} onChangeText={onChange} onBlur={onBlur} {...inputProps} />
          {error && <ErrorMessage message={error.message} />}
        </View>
      )}
    />
  )
}
