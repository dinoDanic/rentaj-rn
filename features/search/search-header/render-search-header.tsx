import { View } from "react-native"

import { Input } from "@/components/ui/input"

import { useSearch } from "../hooks/use-search"

// const formSchema = z.object({
//   query: z.string().min(3),
// })

export const RenderSearchHeader = () => {
  const { query, setQuery } = useSearch()
  // const { control } = useForm<SearchInput>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     query: "",
  //   },
  // })

  // const onSubmit = (data: object) => {
  //   Alert.alert("Successful", JSON.stringify(data))
  // }

  return (
    <View className="px-screen pb-md">
      <Input placeholder="Pretraži robu ili kategoriju" value={query || ""} onChangeText={(value) => setQuery(value)} />
      {/* <Controller */}
      {/*   control={control} */}
      {/*   name="query" */}
      {/*   render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => ( */}
      {/*     <View className="gap-md"> */}
      {/*       <Input placeholder="Search" value={value ?? ""} onChangeText={onChange} onBlur={onBlur} /> */}
      {/*       {error && <Text className="text-destructive">{error.message}</Text>} */}
      {/*     </View> */}
      {/*   )} */}
      {/* /> */}
    </View>
  )
}
