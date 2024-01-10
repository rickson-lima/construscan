import { FORMS } from "@/constants/forms.constants";
import { z } from "zod";

export const signInValidation = z.object({
  email: z
    .string({ required_error: FORMS.ERRORS.REQUIRED_FIELD })
    .min(1, FORMS.ERRORS.REQUIRED_FIELD),
  password: z
    .string({ required_error: FORMS.ERRORS.REQUIRED_FIELD })
    .min(1, FORMS.ERRORS.REQUIRED_FIELD),
});

export type SigInSchema = z.infer<typeof signInValidation>;
