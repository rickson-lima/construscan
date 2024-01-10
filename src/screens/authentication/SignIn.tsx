import {
  Button,
  ButtonText,
  HStack,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation, useScrollToTop } from "@react-navigation/native";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { FormInput } from "@/components/FormInput";
import { Logo } from "@/components/Logo";
import { Sample } from "@/components/Sample";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { SubmitButton } from "@/components/SubmitButton";
import { useAuthentication } from "@/hooks/useAuth";
import {
  SigInSchema,
  signInValidation,
} from "@/schemas/authentication/sign-in.schema";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function SignInScreen() {
  const { signIn } = useAuthentication();
  const { navigate } = useNavigation();
  const { control, handleSubmit, setError } = useForm<SigInSchema>({
    resolver: zodResolver(signInValidation),
    mode: "onChange",
  });

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data: SigInSchema) {
    setIsLoading(true);

    const response = await signIn(data);

    if (Array.isArray(response)) {
      //@ts-ignore
      response.map(({ field, message }) => setError(field, { message }));
    }

    setIsLoading(false);
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ScreenWrapper px="$0" gap="$10">
        <KeyboardAwareScrollView style={{ flex: 1 }}>
          <VStack flex={1} justifyContent="center">
            <Logo />
          </VStack>

          <VStack flex={1} px="$6" gap="$6" justifyContent="flex-end">
            <FormInput label="E-mail" control={control} name="email" />
            <FormInput
              label="Senha"
              type="password"
              control={control}
              name="password"
            />

            <Button
              mt="-$3"
              variant="link"
              alignSelf="flex-end"
              onPress={() => navigate("recoverAccount")}
            >
              <ButtonText color="$primary800">Esqueci minha senha</ButtonText>
            </Button>

            <SubmitButton
              isLoading={isLoading}
              onPress={handleSubmit(onSubmit)}
            >
              Entrar
            </SubmitButton>
          </VStack>

          <HStack
            borderTopColor="$border100"
            borderTopWidth="$1"
            alignItems="center"
            justifyContent="center"
            pt="$5"
          >
            <Text color="$primary800" fontSize="$sm">
              Não tem uma conta?{" "}
            </Text>
            <Button variant="link" ml="-$4" onPress={() => navigate("signUp")}>
              <ButtonText>Cadastre-se</ButtonText>
            </Button>
          </HStack>
        </KeyboardAwareScrollView>
      </ScreenWrapper>
    </ScrollView>
  );
}
