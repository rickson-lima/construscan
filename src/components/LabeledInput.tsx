import { HStack, Input, Text } from "@gluestack-ui/themed";

type Props = {
  children: React.ReactNode;
  label: string;
} & React.ComponentProps<typeof Input>;

export function LabeledInput({ children, label, ...rest }: Props) {
  return (
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
        {...rest}
      >
        {children}
      </Input>
    </HStack>
  );
}
