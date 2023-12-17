import { SvgProps } from "react-native-svg";
import FirstStepIcon from "@/assets/onboarding-1.svg";
import SecondStepIcon from "@/assets/onboarding-2.svg";
import ThirdStepIcon from "@/assets/onboarding-3.svg";

type Step = {
  Icon: React.FC<SvgProps>;
  title: string;
  description: string;
};

export const ONBOARDING_STEPS: Step[] = [
  {
    Icon: FirstStepIcon,
    title: "Olá!",
    description:
      "Gerencie e organize de forma prática suas obras e seu progresso em tempo real.",
  },
  {
    Icon: SecondStepIcon,
    title: "Pranchas",
    description:
      "Visualize os desenhos técnicos e outras informações relevantes diretamente no aplicativo.",
  },
  {
    Icon: ThirdStepIcon,
    title: "Tarefas",
    description:
      "Garanta que todas as etapas da obra sejam concluídas dentro do prazo e com eficiência.",
  },
];
