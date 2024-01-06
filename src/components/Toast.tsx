import {
  Toast as GluestackToast,
  ToastDescription,
} from "@gluestack-ui/themed";

export type ToastProps = Pick<
  {
    children: React.ReactNode;
  } & React.ComponentProps<typeof GluestackToast>,
  "variant" | "nativeID" | "action"
> & { message: string };

export function Toast({ message = "Hello world!", ...rest }: ToastProps) {
  return (
    <GluestackToast {...rest}>
      <ToastDescription textAlign="center" w={"$full"}>
        {message}
      </ToastDescription>
    </GluestackToast>
  );
}
