import { Center, HStack, Heading } from "@gluestack-ui/themed";

import HelmetIcon from "@/assets/helmet.svg";

export function Logo() {
  return (
    <HStack px="$6" alignItems="center" gap="$3">
      <Center
        h="$14"
        w="$14"
        rounded="$full"
        borderWidth="$2"
        borderColor="$secondary"
      >
        <HelmetIcon />
      </Center>
      <Heading size="2xl">ConstruScan</Heading>
    </HStack>
  );
}
