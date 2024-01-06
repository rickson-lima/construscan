import { Button, ButtonText } from "@gluestack-ui/themed";
import { Keyboard } from "react-native";

type SubmitButtonProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof Button>;

export function SubmitButton({
  children,
  onPress,
  ...rest
}: SubmitButtonProps) {
  return (
    <Button
      size="xl"
      variant="solid"
      onPress={(e) => {
        Keyboard.dismiss();
        if (onPress) onPress(e);
      }}
      {...rest}
    >
      <ButtonText>{children}</ButtonText>
    </Button>
  );
}
