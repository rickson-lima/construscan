import { Toast, ToastProps } from "@/components/Toast";
import { useToast as useGluestackToast } from "@gluestack-ui/themed";

export function useToast() {
  const toast = useGluestackToast();

  function showToast(props: ToastProps) {
    toast.show({
      placement: "top",
      render: ({ id }) => {
        const toastId = "toast-" + id;
        return <Toast nativeID={toastId} {...props} />;
      },
    });
  }

  return { showToast };
}
