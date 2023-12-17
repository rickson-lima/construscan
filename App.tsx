import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "./config/gluestack-ui.config";
import { OnboardingScreen } from "./src/screens/Onboarding";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaProvider>
        <OnboardingScreen />
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}
