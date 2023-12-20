import { Button, ButtonText } from "@gluestack-ui/themed";

type SubmitButtonProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof Button>;

export function SubmitButton({ children, ...rest }: SubmitButtonProps) {
  return (
    <Button
      variant="solid"
      bg="$secondary"
      size="xl"
      rounded="$2xl"
      mt="$5"
      {...rest}
    >
      <ButtonText color="$white" fontWeight="$normal" fontSize="$lg">
        {children}
      </ButtonText>
    </Button>
  );
}
