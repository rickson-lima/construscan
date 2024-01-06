import { Button, ButtonSpinner, ButtonText } from "@gluestack-ui/themed";
import { Keyboard } from "react-native";

type SubmitButtonProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof Button> & {
    isLoading?: boolean;
  };

export function SubmitButton({
  children,
  onPress,
  isLoading = false,
  isDisabled,
  ...rest
}: SubmitButtonProps) {
  return (
    <Button
      {...rest}
      size="xl"
      isDisabled={isLoading || isDisabled}
      variant="solid"
      onPress={(e) => {
        Keyboard.dismiss();
        if (onPress) onPress(e);
      }}
    >
      <ButtonSpinner mr="$1" display={isLoading ? "flex" : "none"} />
      <ButtonText>{children}</ButtonText>
    </Button>
  );
}
