import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useToken } from "@gluestack-style/react";

import { OnboardingScreen } from "@/screens/Onboarding";
import { SignInScreen } from "@/screens/authentication/SignIn";
import { SignUpScreen } from "@/screens/authentication/SignUp";
import { RecoverAccountScreen } from "@/screens/authentication/RecoverAccount";

import { RootStackParamList } from "@/@types/navigation";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

interface Props {
  initialRoute: keyof RootStackParamList;
}

export function AuthRoutes({ initialRoute }: Props) {
  const whiteColor = useToken("colors", "white");
  return (
    <Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerShown: false,
        animation: "none",
        contentStyle: {
          backgroundColor: whiteColor,
        },
      }}
    >
      <Screen name="onboarding" component={OnboardingScreen} />
      <Screen name="signIn" component={SignInScreen} />
      <Screen name="signUp" component={SignUpScreen} />
      <Screen name="recoverAccount" component={RecoverAccountScreen} />
    </Navigator>
  );
}
