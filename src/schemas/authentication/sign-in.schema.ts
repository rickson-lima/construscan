import { FormsConstants } from "@/constants/forms.constants";
import { z } from "zod";

export const signInValidation = z.object({
  email: z
    .string({ required_error: FormsConstants.REQUIRED_FIELD })
    .min(1, FormsConstants.REQUIRED_FIELD),
  passwd: z
    .string({ required_error: FormsConstants.REQUIRED_FIELD })
    .min(1, FormsConstants.REQUIRED_FIELD),
});

export type SigInSchema = z.infer<typeof signInValidation>;
