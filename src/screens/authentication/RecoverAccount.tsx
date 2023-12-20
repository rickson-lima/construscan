import { Header } from "@/components/Header";
import { LabeledInput } from "@/components/LabeledInput";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { SubmitButton } from "@/components/SubmitButton";
import { InputField } from "@gluestack-ui/themed";

export function RecoverAccountScreen() {
  return (
    <ScreenWrapper gap="$11">
      <Header.Root>
        <Header.GoBack />
        <Header.Title>Recuperar conta</Header.Title>
      </Header.Root>

      <LabeledInput label="E-mail">
        <InputField size="sm" />
      </LabeledInput>

      <SubmitButton>Enviar</SubmitButton>
    </ScreenWrapper>
  );
}
