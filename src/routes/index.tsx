import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SHOW_ONBOARDING_KEY } from "../constants/async-storage-keys.constants";
import { AuthRoutes } from "./auth.routes";
import { StackRoutes } from "./stack.routes";
import { auth } from "@/config/firebase.config";
import { User } from "firebase/auth";

export function AppRoutes() {
  const [isLoading, setIsLoading] = useState(true);
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
  const [isFirstAccess, setIsFirstAccess] = useState<boolean>(true);

  const getFirstAccessKey = (callback: () => void) => {
    AsyncStorage.getItem(SHOW_ONBOARDING_KEY)
      .then((value) => {
        if (!value) return console.info(SHOW_ONBOARDING_KEY + " key is null");

        setIsFirstAccess(value.toLowerCase() === "true");
        console.log({ isFirstAccess });
      })
      .catch((e) => {
        console.error(e);
        console.log("Failed to fetch the input from storage");
      })
      .finally(() => callback());
  };

  useEffect(() => {
    getFirstAccessKey(() => {
      const subscriber = auth.onAuthStateChanged((auth) => {
        setLoggedUser(auth);

        if (auth && __DEV__) {
          console.log("Logged as: ", auth.email);
        }

        if (!isLoading) return;

        setIsLoading(false);
      });

      return subscriber;
    });
  }, []);

  // TODO: show SplashScreen
  if (isLoading) return null;

  return (
    <NavigationContainer>
      {loggedUser ? (
        <StackRoutes />
      ) : (
        <AuthRoutes initialRoute={isFirstAccess ? "onboarding" : "signIn"} />
      )}
    </NavigationContainer>
  );
}
