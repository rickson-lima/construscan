import { Heading, Text, VStack } from "@gluestack-ui/themed";

import {
  AnimatedView,
  AnimatePresence,
} from "@gluestack-style/animation-resolver";
import { styled } from "@gluestack-style/react";
import { ONBOARDING_STEPS } from "@/constants/onboarding-steps.constants";

type Props = {
  stepIndex: number;
};

export function OnboardingStep({ stepIndex = 0 }: Props) {
  const step = ONBOARDING_STEPS[stepIndex];

  const AnimatedBox = styled(AnimatedView, {
    ":initial": {
      x: -50,
      opacity: 0,
    },
    ":animate": {
      opacity: 1,
      x: 0,
    },
  });

  if (!step) {
    console.error(`Onboarding step '${stepIndex}' doesn't exists`);
    return null;
  }

  return (
    <AnimatePresence key={stepIndex}>
      <AnimatedBox>
        <step.Icon
          style={{ alignSelf: "center", marginTop: 24, marginBottom: 42 }}
        />

        <VStack gap="$2" mb="$10">
          <Heading size="3xl">{step.title}</Heading>
          <Text size="xl" color="$primary300">
            {step.description}
          </Text>
        </VStack>
      </AnimatedBox>
    </AnimatePresence>
  );
}
