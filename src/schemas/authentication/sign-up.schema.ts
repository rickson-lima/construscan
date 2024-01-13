import { FORMS } from "@/constants/forms.constants";
import { z } from "zod";

const { ERRORS } = FORMS;

export const signUpValidation = z
  .object({
    name: z
      .string({ required_error: ERRORS.REQUIRED_FIELD })
      .min(1, FORMS.ERRORS.REQUIRED_FIELD),
    email: z
      .string({ required_error: ERRORS.REQUIRED_FIELD })
      .min(1, FORMS.ERRORS.REQUIRED_FIELD)
      .email({ message: ERRORS.INVALID_EMAIL }),
    password: z
      .string({ required_error: ERRORS.REQUIRED_FIELD })
      .min(6, ERRORS.MIN_PASSWORD_LEN),
    passwordConfirmation: z
      .string({
        required_error: ERRORS.REQUIRED_FIELD,
      })
      .min(1, FORMS.ERRORS.REQUIRED_FIELD),
  })
  .superRefine((args, ctx) => {
    if (args.passwordConfirmation !== args.password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: ERRORS.DIFFERENT_PASSWORDS,
        path: ["passwordConfirmation"],
      });
    }
  });

export type SignUpSchema = z.infer<typeof signUpValidation>;
