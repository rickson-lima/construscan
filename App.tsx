import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "./config/gluestack-ui.config";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppRoutes } from "@/routes";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaProvider>
        <AppRoutes />
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}
