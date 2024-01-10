import { useState } from "react";
import {
  InputIcon,
  FormControl,
  FormControlError,
  InputSlot,
  FormControlErrorText,
  Input,
  InputField,
  EyeIcon,
  EyeOffIcon,
  FormControlLabel,
  FormControlLabelText,
} from "@gluestack-ui/themed";
import { UseControllerProps, useController } from "react-hook-form";
import { ViewProps } from "react-native";

type FormInputProps = UseControllerProps<any> & {
  label: string;
  ref?: React.Ref<ViewProps>;
  type?: "password" | "text";
  isDisabled?: boolean;
};

export function FormInput({
  label,
  ref,
  type = "text",
  isDisabled = false,
  ...controller
}: FormInputProps) {
  const { field, fieldState } = useController(controller);

  const [showPassword, setShowPassword] = useState(false);

  const hasError = !!fieldState.error?.message;

  function togglePasswordVisibility() {
    setShowPassword((prev) => !prev);
  }

  return (
    <FormControl isInvalid={hasError} isDisabled={isDisabled}>
      <FormControlLabel zIndex={999}>
        <FormControlLabelText
          position="absolute"
          left="$2"
          top="-$2"
          px="$1"
          bg="$white"
          size="xs"
        >
          {label}
        </FormControlLabelText>
      </FormControlLabel>

      <Input ref={ref} width="$full" size="lg" variant="outline" rounded="$lg">
        <InputField
          size="sm"
          onChangeText={field.onChange}
          fontWeight="$medium"
          type={type === "text" || showPassword ? "text" : "password"}
        />

        <InputSlot
          pr="$3"
          onPress={togglePasswordVisibility}
          display={type === "password" ? "flex" : "none"}
        >
          <InputIcon
            as={showPassword ? EyeIcon : EyeOffIcon}
            color="$primary300"
          />
        </InputSlot>
      </Input>

      <FormControlError>
        <FormControlErrorText size="xs">
          {fieldState.error?.message}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
