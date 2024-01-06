import { Button, ButtonIcon, ChevronLeftIcon } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

export function HeaderGoBack() {
  const { goBack } = useNavigation();

  return (
    <Button onPress={goBack} size="xs" width="$8" bg="$transparent">
      <ButtonIcon color="$primary800" size="xl" as={ChevronLeftIcon} />
    </Button>
  );
}
