import { HStack } from "@gluestack-ui/themed";

type HeaderRootProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof HStack>;

export function HeaderRoot({ children, ...rest }: HeaderRootProps) {
  return (
    <HStack alignItems="center" gap="$2.5" {...rest}>
      {children}
    </HStack>
  );
}
