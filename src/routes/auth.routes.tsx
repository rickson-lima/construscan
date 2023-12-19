import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignInScreen } from '../screens/authentication/SignIn';
// import { SignUp } from '../screens/authentication/SignUp';
// import { RecoverAccount } from '../screens/authentication/RecoverAccount';
import { OnboardingScreen } from "../screens/Onboarding";
import { useToken } from '@gluestack-style/react';
import { RootStackParamList } from '@/@types/navigation';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();


interface Props {
  initialRoute: keyof RootStackParamList
}

export function AuthRoutes({ initialRoute }: Props) {
  const whiteColor = useToken("colors", "white")
  return (
    <Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerShown: false,
        animation: 'none',
        contentStyle: {
          backgroundColor: whiteColor,
        },
      }}
    >
      <Screen name="onboarding" component={OnboardingScreen} />
      <Screen name="signIn" component={SignInScreen} />
      {/* <Screen name="signUp" component={SignUp} /> */}
      {/* <Screen name="recoverAccount" component={RecoverAccount} /> */}
    </Navigator>
  );
}