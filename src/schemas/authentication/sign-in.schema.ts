import { FORMS } from "@/constants/forms.constants";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

const { ERRORS, FIELDS } = FORMS;

export const signInValidation = z.object({
  email: z
    .string({ required_error: ERRORS.REQUIRED_FIELD })
    .min(1, FORMS.ERRORS.REQUIRED_FIELD),
  password: z
    .string({ required_error: ERRORS.REQUIRED_FIELD })
    .min(1, FORMS.ERRORS.REQUIRED_FIELD),
});

export type SigInSchema = z.infer<typeof signInValidation>;
