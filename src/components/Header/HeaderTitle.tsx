import { Heading } from "@gluestack-ui/themed";

type HeaderTitleProps = {
  children: React.ReactNode;
};

export function HeaderTitle({ children, ...rest }: HeaderTitleProps) {
  return (
    <Heading size="lg" {...rest}>
      {children}
    </Heading>
  );
}
