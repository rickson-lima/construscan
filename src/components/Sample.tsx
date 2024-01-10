import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FormInput } from "./FormInput";
import { useForm } from "react-hook-form";
import { View } from "@gluestack-ui/themed";

export function Sample() {
  const { control } = useForm();
  return (
    <KeyboardAwareScrollView extraHeight={120}>
      <View flex={1} gap="$4">
        <FormInput label="Oi" name="" control={control} />
        <FormInput label="Oi" name="" control={control} />
        <FormInput label="Oi" name="" control={control} />
        <FormInput label="Oi" name="" control={control} />
        <FormInput label="Oi" name="" control={control} />
        <FormInput label="Oi" name="" control={control} />
        <FormInput label="Oi" name="" control={control} />
        <FormInput label="Oi" name="" control={control} />
        <FormInput label="Oi" name="" control={control} />
        <FormInput label="Oi" name="" control={control} />
        <FormInput label="Oi" name="" control={control} />
        <FormInput label="Oi" name="" control={control} />
        <FormInput label="Oi" name="" control={control} />
        <FormInput label="Oi" name="" control={control} />
        <FormInput label="Oi" name="" control={control} />
        <FormInput label="Oi" name="" control={control} />
        <FormInput label="Oi" name="" control={control} />
        <FormInput label="Oi" name="" control={control} />
        <FormInput label="Oi" name="" control={control} />
        <FormInput label="Oi" name="" control={control} />
      </View>
    </KeyboardAwareScrollView>
  );
}
