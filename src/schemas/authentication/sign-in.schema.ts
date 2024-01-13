import { FORMS } from "@/constants/forms.constants";
import { z } from "zod";

const { ERRORS, FIELDS } = FORMS;

export const signInValidation = z.object({
  [FIELDS.EMAIL]: z
    .string({ required_error: ERRORS.REQUIRED_FIELD })
    .min(1, FORMS.ERRORS.REQUIRED_FIELD),
  [FIELDS.PASSWORD]: z
    .string({ required_error: ERRORS.REQUIRED_FIELD })
    .min(1, FORMS.ERRORS.REQUIRED_FIELD),
});

export type SigInSchema = z.infer<typeof signInValidation>;
