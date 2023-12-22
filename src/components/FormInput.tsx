import { useState } from 'react'
import { InputIcon, FormControl, FormControlError, InputSlot, FormControlErrorText, Input, InputField, EyeIcon, EyeOffIcon, HStack, Text } from '@gluestack-ui/themed'

type FormInputProps = {
  type?: "password" | "text"
  label: string
  error?: string
}

export function FormInput({ type = "text", error, label }: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  function togglePasswordVisibility() {
    setShowPassword((prev) => !prev)
  }

  return (
    <FormControl>
      <HStack width="$full">
        <Text
          position="absolute"
          left="$2"
          top="-$2.5"
          px="$1"
          zIndex={999}
          bg="$white"
          size="xs"
        >
          {label}
        </Text>

        <Input
          width="$full"
          size="lg"
          variant="outline"
          rounded="$lg"
          borderColor="$border100"
        >
          <InputField size="sm" fontWeight="$medium" type={showPassword ? "password" : "text"} />

          <InputSlot pr="$3" onPress={togglePasswordVisibility} display={type === "password" ? "flex" : "none"}>
            <InputIcon
              as={showPassword ? EyeIcon : EyeOffIcon}
              color="$primary300"
            />
          </InputSlot>
        </Input>
      </HStack>

      <FormControlError>
        <FormControlErrorText>
          {error}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  )
}