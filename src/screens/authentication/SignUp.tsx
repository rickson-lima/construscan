import { FormInput } from "@/components/FormInput";
import { Header } from "@/components/Header";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { SubmitButton } from "@/components/SubmitButton";
import { CheckCircleIcon, HStack, Icon, Text, VStack } from "@gluestack-ui/themed";

export function SignUpScreen() {

  return (
    <ScreenWrapper justifyContent="space-between">
      <VStack gap="$12">
        <Header.Root>
          <Header.GoBack />
          <Header.Title>Criar conta</Header.Title>
        </Header.Root>

        <VStack gap="$6">
          <FormInput label="Nome" />
          <FormInput label="E-mail" />
          <FormInput label="Senha" type="password" />
          <FormInput label="Confirmar senha" type="password" />

          <HStack gap="$2">
            <Icon mt="$1" color="$green900" as={CheckCircleIcon} />
            <Text fontSize="$sm">
              Crie uma senha com pelo menos seis {"\n"}caracteres;
            </Text>
          </HStack>

          <HStack gap="$2">
            <Icon mt="$1" color="$green900" as={CheckCircleIcon} />
            <Text fontSize="$sm">
              Utilize uma combinação de letras maiúsculas e minúsculas, números e caracteres especiais, como ., !, @, #, $, %, & e *.
            </Text>
          </HStack>
        </VStack>
      </VStack>

      <SubmitButton >
        Criar
      </SubmitButton>
    </ScreenWrapper>
  );
}
