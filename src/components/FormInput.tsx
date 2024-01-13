import {
  EyeIcon,
  EyeOffIcon,
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from "@gluestack-ui/themed";
import { useState } from "react";
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";

interface FormInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  name: TFieldName; // This successfully typechecks the name, but doesn't restrict which type it points to
  control: Control<TFieldValues>;
  label: string;
  type?: "password" | "text";
  isDisabled?: boolean;
}

export function FormInput<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  type = "text",
  isDisabled = false,
}: FormInputProps<TFieldValues, TFieldName>) {
  const { field, fieldState } = useController({ control, name });

  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword((prev) => !prev);
  }

  return (
    <FormControl isInvalid={fieldState.invalid} isDisabled={isDisabled}>
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

      <Input width="$full" size="lg" variant="outline" rounded="$lg">
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
