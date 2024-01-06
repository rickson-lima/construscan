import { LabeledInput } from "@/components/LabeledInput";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { SubmitButton } from "@/components/SubmitButton";
import {
  Button,
  ButtonText,
  EyeIcon,
  EyeOffIcon,
  HStack,
  InputField,
  InputIcon,
  InputSlot,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function SignInScreen() {
  const { navigate } = useNavigation();

  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword((showState) => !showState);
  }

  return (
    <ScreenWrapper
      justifyContent="flex-end"
      flexDirection="column"
      px="$0"
      gap="$10"
    >
      <VStack px="$6" gap="$6">
        <LabeledInput label="E-mail">
          <InputField size="sm" />
        </LabeledInput>

        <LabeledInput label="Senha">
          <InputField size="sm" type={showPassword ? "text" : "password"} />
          <InputSlot pr="$3" onPress={togglePasswordVisibility}>
            <InputIcon
              as={showPassword ? EyeIcon : EyeOffIcon}
              color="$primary300"
            />
          </InputSlot>
        </LabeledInput>

        <Button
          variant="link"
          alignSelf="flex-end"
          mt="-$3"
          onPress={() => navigate("recoverAccount")}
        >
          <ButtonText color="$primary800">Esqueci minha senha</ButtonText>
        </Button>

        <SubmitButton>Entrar</SubmitButton>
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
        <Button variant="link" ml="-$2" onPress={() => navigate("signUp")}>
          <ButtonText>Cadastre-se</ButtonText>
        </Button>
      </HStack>
    </ScreenWrapper>
  );
}
