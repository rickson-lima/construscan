import { useState } from "react";
import {
  CheckCircleIcon,
  HStack,
  Icon,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { FormInput } from "@/components/FormInput";
import { Header } from "@/components/Header";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { SubmitButton } from "@/components/SubmitButton";
import { useAuthentication } from "@/hooks/useAuth";
import {
  SignUpSchema,
  signUpValidation,
} from "@/schemas/authentication/sign-up.schema";

export function SignUpScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const { signUp } = useAuthentication();
  const { control, handleSubmit, setError, formState } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpValidation),
    mode: "onChange",
  });

  async function onSubmitNewUser(data: SignUpSchema) {
    setIsLoading(true);

    const response = await signUp(data);

    if (response?.message && response?.field) {
      //@ts-ignore
      setError(response.field, { message: response.message });
    }

    setIsLoading(false);
  }

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <ScreenWrapper justifyContent="space-between">
        <VStack gap="$12">
          <Header.Root>
            <Header.GoBack />
            <Header.Title>Criar conta</Header.Title>
          </Header.Root>

          <VStack gap="$6">
            <FormInput label="Nome" control={control} name="name" />
            <FormInput label="E-mail" control={control} name="email" />
            <FormInput
              label="Senha"
              control={control}
              name="password"
              type="password"
            />
            <FormInput
              label="Confirmar senha"
              control={control}
              name="passwordConfirmation"
              type="password"
            />

            <HStack gap="$2">
              <Icon mt="$1" color="$green900" as={CheckCircleIcon} />
              <Text fontSize="$sm">
                Crie uma senha com pelo menos seis {"\n"}caracteres;
              </Text>
            </HStack>

            <HStack gap="$2">
              <Icon mt="$1" color="$green900" as={CheckCircleIcon} />
              <Text fontSize="$sm">
                Utilize uma combinação de letras maiúsculas e minúsculas,
                números e caracteres especiais,{"\n"}como ., !, @, #, $, %, & e
                *.
              </Text>
            </HStack>
          </VStack>
        </VStack>

        <SubmitButton
          mt="$8"
          isLoading={isLoading}
          isDisabled={!formState.isDirty}
          onPress={handleSubmit(onSubmitNewUser)}
        >
          Criar
        </SubmitButton>
      </ScreenWrapper>
    </ScrollView>
  );
}
