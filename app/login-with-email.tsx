import { useMe } from "@/features/auth/hooks/use-me"
import { CreateSessionDocument, CreateSessionInput, CreateSessionMutationVariables } from "@/gql/generated/graphql"
import { _client } from "@/lib"
import { ZodType } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useMutation } from "@tanstack/react-query"
import { router } from "expo-router"
import { FormProvider, useForm } from "react-hook-form"
import { ScrollView, View } from "react-native"
import { z } from "zod"

import { asyncStorage } from "@/lib/async-storage"
import { Button } from "@/components/ui/button"
import { FormInput } from "@/components/ui/form/form-input"

const formSchema = z.object<ZodType<CreateSessionInput>>({
  email: z.string().email(),
  password: z.string(),
})

export default function LoginWithEmail() {
  const { setMe } = useMe()
  const createSession = useMutation({
    mutationFn: (args: CreateSessionMutationVariables) => _client.request(CreateSessionDocument, args),
  })

  const form = useForm<CreateSessionInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: undefined,
      password: undefined,
    },
  })

  const onError = () => form.setError("password", { message: "Netočna lozinka ili email adresa" })

  const submit = async (input: CreateSessionInput) => {
    try {
      const res = await createSession.mutateAsync({ input })
      if (!res.createSession?.token) {
        onError()
        return
      }
      await AsyncStorage.setItem(asyncStorage.token, res.createSession.token)
      setMe(res.createSession.user)
      router.back()
    } catch {
      onError()
    }
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View className="gap-md p-screen">
        <FormProvider {...form}>
          <FormInput<CreateSessionInput> name="email" placeholder="Email" keyboardType="email-address" />
          <FormInput<CreateSessionInput>
            name="password"
            placeholder="Lozinka"
            keyboardType="visible-password"
            secureTextEntry={true}
          />
        </FormProvider>
        <Button loading={createSession.isPending} title="Login" onPress={form.handleSubmit(submit)} />
        <Button
          variant="light"
          loading={createSession.isPending}
          title="Test user"
          onPress={() => submit({ email: "user@user.com", password: "password" })}
        />
      </View>
    </ScrollView>
  )
}
