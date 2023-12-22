import { Button, ButtonText } from "@gluestack-ui/themed";

type SubmitButtonProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof Button>;

export function SubmitButton({ children, onPress, ...rest }: SubmitButtonProps) {
  return (
    <Button
      variant="solid"
      action="primary"
      bg={"$secondary"}
      size="xl"
      rounded="$2xl"
      mt="$5"
      $disabled-bg="$opaqueSecondary"
      {...rest}
    >
      <ButtonText color="$white" fontWeight="$normal" fontSize="$lg">
        {children}
      </ButtonText>
    </Button>
  );
}
