import { ScreenWrapper } from "@/components/ScreenWrapper";
import { useAuthentication } from "@/hooks/useAuth";
import { Text } from "@gluestack-ui/themed";

export function ProjectsScreen() {
  const { logout } = useAuthentication();
  return (
    <ScreenWrapper>
      <Text onPress={logout}>Oi</Text>
    </ScreenWrapper>
  );
}
