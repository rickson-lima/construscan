import { ScreenWrapper } from "@/components/ScreenWrapper";
import { Input, InputField } from "@gluestack-ui/themed";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function SignUpScreen() {
  return (
    <ScreenWrapper>
      <Input
        size="md"
        variant="outline"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Enter Text here" />
      </Input>
    </ScreenWrapper>
  );
}
