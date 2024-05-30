import { CreateSessionDocument, CreateSessionInput, CreateSessionMutationVariables } from "@/gql/generated/graphql"
import { queryUserKeys } from "@/gql/hooks/user"
import { _client } from "@/lib"
import { ZodType } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { router } from "expo-router"
import { FormProvider, useForm } from "react-hook-form"
import { View } from "react-native"
import { z } from "zod"

import { queryClient } from "@/lib/react-query/query-client"
import { Button } from "@/components/ui/button"
import { FormInput } from "@/components/ui/form/form-input"
import { H1 } from "@/components/ui/typography"

const formSchema = z.object<ZodType<CreateSessionInput>>({
  email: z.string().email(),
  password: z.string(),
})

export default function LoginWithEmail() {
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
      _client.setHeader("Authorization", `Bearer ${res.createSession.token}`)
      queryClient.invalidateQueries({ queryKey: queryUserKeys.me })
      router.back()
    } catch {
      onError()
    }
  }

  return (
    <View className="gap-lg bg-white p-screen py-3xl">
      <H1 className="text-center">Login</H1>
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
  )
}
