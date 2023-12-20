import { Button, ButtonIcon, ChevronLeftIcon } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

export function HeaderGoBack() {
  const { goBack } = useNavigation();

  return (
    <Button onPress={goBack} size="xs" width="$8">
      <ButtonIcon size="xl" as={ChevronLeftIcon} />
    </Button>
  );
}
