import {
  Button,
  ButtonIcon,
  ButtonText,
  ChevronLeftIcon,
  ChevronRightIcon,
  HStack,
  useToken,
} from "@gluestack-ui/themed";
import { useState } from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { OnboardingStep } from "@/components/OnboardingStep";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { SHOW_ONBOARDING_KEY } from "@/constants/async-storage-keys.constants";
import HelmetIcon from "@/assets/helmet.svg";

export function OnboardingScreen() {
  const secondaryColor = useToken("colors", "secondary");
  const opaqueSecondaryColor = useToken("colors", "opaqueSecondary");

  const [stepProgress, setStepProgress] = useState(50);
  const [stepIndex, setStepIndex] = useState(0);

  const isOnboardingFinished = stepProgress === 100;

  async function handleFinishOnboarding() {
    try {
      await AsyncStorage.setItem(SHOW_ONBOARDING_KEY, "false");
      console.log("vai para login");
    } catch (error) {
      console.error(error);
    }
  }

  function handleNextStep() {
    if (isOnboardingFinished) return;

    setStepIndex((previous) => previous + 1);
    setStepProgress((previousValue) => previousValue + 25);
  }

  function handlePreviousStep() {
    if (stepProgress <= 50) return;

    setStepIndex((previous) => previous - 1);
    setStepProgress((previousValue) => previousValue - 25);
  }

  return (
    <ScreenWrapper>
      <Button
        size="xs"
        alignSelf="flex-start"
        onPress={handleFinishOnboarding}
        display={isOnboardingFinished ? "none" : "flex"}
      >
        <ButtonText fontSize="$md" fontWeight="$normal">
          Pular
        </ButtonText>
      </Button>

      <OnboardingStep stepIndex={stepIndex} />

      <HStack justifyContent="space-between" alignItems="center">
        <Button
          px="$1.5"
          variant="link"
          onPress={handlePreviousStep}
          disabled={stepProgress < 50}
        >
          <ButtonIcon
            size="xl"
            color={stepProgress > 50 ? "$primary800" : "$white"}
            as={ChevronLeftIcon}
          />
        </Button>

        {isOnboardingFinished ? (
          <Button
            justifyContent="space-around"
            variant="outline"
            borderColor="$secondary"
            borderWidth="$3"
            rounded="$full"
            height="$20"
            width="$48"
            onPress={handleFinishOnboarding}
          >
            <HelmetIcon />
            <ButtonText fontWeight="$normal" fontSize="$xl" color="$secondary">
              Começar
            </ButtonText>
          </Button>
        ) : (
          <>
            <AnimatedCircularProgress
              size={80}
              width={3}
              fill={stepProgress}
              padding={0}
              rotation={0}
              tintColor={secondaryColor}
              backgroundColor={opaqueSecondaryColor}
            >
              {(fill) => <HelmetIcon />}
            </AnimatedCircularProgress>

            <Button variant="link" px="$1.5" onPress={handleNextStep}>
              <ButtonIcon size="xl" color="$primary800" as={ChevronRightIcon} />
            </Button>
          </>
        )}
      </HStack>
    </ScreenWrapper>
  );
}
