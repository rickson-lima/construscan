import { VStack } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children: React.ReactNode;
} & React.ComponentProps<typeof VStack>;

export function ScreenWrapper({ children, ...rest }: Props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VStack flex={1} py="$8" px="$6" {...rest}>
        {children}
      </VStack>
    </SafeAreaView>
  );
}
